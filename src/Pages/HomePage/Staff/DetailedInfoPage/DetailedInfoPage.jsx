import React from "react";
import { SalaryTable } from "./SalaryTable/SalaryTable";
import { TopTable } from "./TopTable/TopTable";

export const DetailedInfoPage = () => {
  return (
    <div>
      <TopTable />
      <SalaryTable />
    </div>
  );
};
