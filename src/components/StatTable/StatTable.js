import React from "react";
import { Table } from "@mantine/core";
import { calculateFlavonoidsStats } from "../../utils/statisticsUtils";

const StatTable = ({ data, baseStat }) => {
  // Get unique class names
  const classNames = Array.from(new Set(data.map((item) => item.Alcohol))).sort(
    (a, b) => a - b
  );

  // Function to get stats for each class
  const getClassStats = (stat) => {
    const stats = [];
    classNames.forEach((className) => {
      const flavonoidsStats = calculateFlavonoidsStats(
        className,
        baseStat,
        stat,
        data
      );
      stats.push(flavonoidsStats[stat]);
    });
    // console.log(stats);
    return stats;
  };

  // Generate table rows
  const tableRows = [
    [`${baseStat} Mean`, ...getClassStats("mean")],
    [`${baseStat} Median`, ...getClassStats("median")],
    [`${baseStat} Mode`, ...getClassStats("mode")],
  ];

  const tableData = {
    caption: `${baseStat} Statistics`,
    head: ["Measure", ...classNames.map((className) => `Class ${className}`)],
    body: tableRows,
  };

  return (
    <Table
      data={tableData}
      style={{
        border: "1px solid black",
        width: "50%",
        margin: "auto",
        textAlign: "center",
      }}
    />
  );
};

export default StatTable;
