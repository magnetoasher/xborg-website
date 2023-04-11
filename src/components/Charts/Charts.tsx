import React from "react";
import { useDispatch } from "react-redux";
import {
  XAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  Line,
} from "recharts";
import { formatNumberToK } from "../../helpers/inputs";
import { months } from "../../helpers/time";
import { AppDispatch } from "../../store";
import { SeedViewModel } from "../../viewmodels/SeedViewModel";

export type LineGraphProps = {
  data: any;
  submissions?: number;
};

export const LineGraph = ({ data, submissions }: LineGraphProps) => {
  const newData = data?.map((item: any, index: number) => ({
    ...item,
    xaxisLabel: item.date?.split("/")[1],
    cap: index > data.length / 7 ? 1100000 : undefined,
    hardcap: index > data.length / 7 ? 1600000 : undefined,
    top: 1700000,
  }));

  if (!data?.length) return null;

  return (
    <div className={`line-graph`}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={newData}>
          <defs>
            <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#eb3a4a" stopOpacity={0.4} />
              <stop offset="95%" stopColor="transparent" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Tooltip
            content={<CustomTooltip data={data} submissions={submissions} />}
            cursorStyle={{
              stroke: "cyan",
            }}
          />

          <XAxis dataKey="xaxisLabel" interval={3} />
          <Area
            dataKey="compounded"
            type="basis"
            stroke="#eb3a4a"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
            activeDot={<ActiveDot />}
          />

          <Area
            dataKey="cap"
            type="monotone"
            stroke="#eb3a4a"
            strokeWidth={1}
            strokeOpacity={1}
            strokeDasharray={2}
            fill="transparent"
            dot={<ActiveText fromTop={100} title="$1,1M Cap" />}
            activeDot={<ActiveDotEmpty />}
          />
          <Area
            dataKey="hardcap"
            type="monotone"
            stroke="#eb3a4a"
            strokeWidth={1}
            strokeOpacity={1}
            fill="transparent"
            dot={<ActiveText fromTop={35} title="$1,6M Cap" />}
            activeDot={<ActiveDotEmpty />}
          />
          <Area
            dataKey="top"
            type="monotone"
            stroke="transparent"
            strokeWidth={1}
            strokeOpacity={1}
            fill="transparent"
            activeDot={<ActiveDotEmpty />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const ActiveDotEmpty = () => null;

const ActiveText = (props: any) => {
  const { fromTop, title, index } = props;

  if (index !== 0) return null;

  return (
    <text
      orientation="bottom"
      width="30"
      height="30"
      x={0}
      y={fromTop}
      stroke="none"
      fill="#fff"
      fontWeight={700}
      fontSize={12}
    >
      <tspan>{title}</tspan>
    </text>
  );
};

const ActiveDot = (props: any) => {
  const { cx, cy } = props;

  return (
    <svg
      x={cx - 8}
      y={cy - 8}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.21484" cy="8.59424" r="7.5" stroke="#D1D3D4" />
      <circle cx="8.21484" cy="8.59424" r="5" fill="#D1D3D4" />
    </svg>
  );
};

const CustomTooltip = ({ active, payload, data, submissions }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const vm = new SeedViewModel(dispatch);
  const date = payload?.[0]?.payload?.date;

  if (!date) return null;

  const row = vm.findRowByDate(data, date);
  const dateArray = date?.split("/") || [];

  if (active && payload && payload.length) {
    if (!row) return null;
    return (
      <div className="recharts-tooltip">
        <div className="row column middle center">
          <div className="commited">
            ${formatNumberToK(row.compounded as number, 2)}
          </div>
          <div className="submissions">{submissions} submissions</div>
          <div className="date">
            {months[dateArray[0] - 1]} {dateArray[1]},{dateArray[2]}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
