"use client";

import Pane from "@/components/ui/Pane/Pane";
import React, { useEffect, useState } from "react";
import useOptionsStore from "../../../store/options";
import { sortOptionsByRiskWeightedReturn } from "@/lib/tradeoffs";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Option } from "@/types/options";
import { Progress } from "@/components/ui/Progress/Progress";

function formatOptionsForChart(options: Option[]) {
  return options.map((option) => ({
    title: option.title,
    x: option.ratings.longTermReturn,
    y: option.ratings.risk,
  }));
}

const CustomTooltip = ({ payload }: any) => {
  return (
    <div className="bg-white rounded-[4px] shadow-sm p-2 text-sm">
      {payload && payload[0]?.payload?.title}
    </div>
  );
};

export default function RiskWeightedReturn() {
  const { options } = useOptionsStore();

  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setShowChart(true);
  }, [options]);

  const sortedOptions = sortOptionsByRiskWeightedReturn(options);

  return (
    <Pane id="risk-weighted-return" className="mt-16">
      <div className="justify-between lg:flex lg:items-start">
        <div>
          <h1 className="text-2xl font-[300]">Risk weighted return</h1>

          <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
            Your options sorted by lowest risk and highest long term return.
          </h2>
        </div>

        <div>
          <h3 className="text-[130px] relative lg:top-[-28px] lg:mb-[-45px]">
            🐢
          </h3>
        </div>
      </div>

      {options.length > 0 && (
        <ul className="mt-16 space-y-4">
          {sortedOptions.map((option, index) => (
            <li
              key={index}
              className="rounded-[4px] px-4 py-[21.5px] bg-white lg:flex lg:items-start lg:justify-between"
            >
              <h3>
                #{index + 1} {option.title}
              </h3>

              <div className="max-w-[200px] mt-4 lg:mt-0 text-sm text-neutral-2">
                <h3>Risk: {option.ratings.risk} of 5</h3>

                <Progress
                  value={(option.ratings.risk / 5) * 100}
                  className="h-[4px] mt-2"
                />

                <h3 className="mt-4">
                  Long term return: {option.ratings.longTermReturn} of 5
                </h3>

                <Progress
                  value={(option.ratings.longTermReturn / 5) * 100}
                  className="h-[4px] mt-2"
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      {showChart && (
        <div className="relative px-4 pt-8 pb-10 mt-8 bg-white rounded-[4px]">
          <h3 className="relative text-sm left-[64px] text-neutral-2">Risk</h3>

          <h3 className="absolute bottom-6 text-sm right-[27px] text-neutral-2">
            Returns
          </h3>

          <ScatterChart width={640} height={400}>
            <CartesianGrid />

            <XAxis type="number" dataKey="x" name="Risk" />

            <YAxis type="number" dataKey="y" name="Returns" />

            <Tooltip content={<CustomTooltip />} />

            <Scatter
              data={formatOptionsForChart(sortedOptions)}
              fill="#00d369"
            />
          </ScatterChart>
        </div>
      )}
    </Pane>
  );
}
