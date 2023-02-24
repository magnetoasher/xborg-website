import React from "react";
import { useDispatch } from "react-redux";
import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";
import { months } from "../../helpers/time";
import { AppDispatch } from "../../store";
import { SeedViewModel } from "../../viewmodels/SeedViewModel";

export type LineGraphProps = {
  data: any;
};

export const LineGraph = ({ data }: LineGraphProps) => {
  return (
    <div className={`line-graph`}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#eb3a4a" stopOpacity={0.4} />
              <stop offset="95%" stopColor="transparent" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Tooltip
            content={<CustomTooltip data={data} />}
            cursorStyle={{
              stroke: "yellow",
            }}
          />

          <XAxis dataKey="date" />
          <Area
            dataKey="compounded"
            type="monotone"
            stroke="#eb3a4a"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label, data }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const vm = new SeedViewModel(dispatch);
  const row = vm.findRowByDate(data, label);
  const dateArray = label?.split("/") || [];

  if (active && payload && payload.length) {
    if (!row) return null;
    return (
      <div className="recharts-tooltip">
        <div className="row column middle center">
          <div className="submissions">{row.compounded} submissions</div>
          <span>
            {months[dateArray[0] - 1]} {dateArray[1]},{dateArray[2]}
          </span>
        </div>
      </div>
    );
  }

  return null;
};
