import React from "react";
import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";

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
          <Tooltip content={<CustomTooltip />} />

          <XAxis dataKey="date" />
          <Area
            dataKey="capital"
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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="recharts-tooltip">
        {/* {payload.map((pld) => ( */}
        <div style={{ display: "inline-block", padding: 10 }}>
          <span>#1</span> (Apr 12, 2022)
        </div>
        {/* ))} */}
      </div>
    );
  }

  return null;
};
