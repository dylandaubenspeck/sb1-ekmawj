"use client"

import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button } from "@/components/ui/button";

// Mock data - replace this with actual API call
const mockData = [
  { date: '2023-05-01', totalCalls: 150, avgDuration: '5:30', revenue: 1500 },
  { date: '2023-05-02', totalCalls: 165, avgDuration: '6:15', revenue: 1650 },
  { date: '2023-05-03', totalCalls: 140, avgDuration: '5:45', revenue: 1400 },
];

const columnDefs = [
  { field: 'date', headerName: 'Date', sortable: true, filter: true },
  { field: 'totalCalls', headerName: 'Total Calls', sortable: true, filter: true },
  { field: 'avgDuration', headerName: 'Avg. Duration', sortable: true, filter: true },
  { field: 'revenue', headerName: 'Revenue ($)', sortable: true, filter: true },
];

export default function EndOfDayReports() {
  const [rowData, setRowData] = useState(mockData);

  const fetchData = () => {
    // Replace this with actual API call to APITable
    console.log('Fetching data from APITable...');
    // For now, we'll just randomize the existing data
    const newData = mockData.map(row => ({
      ...row,
      totalCalls: Math.floor(Math.random() * 100) + 100,
      revenue: Math.floor(Math.random() * 1000) + 1000,
    }));
    setRowData(newData);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">End of Day Reports</h1>
        <Button onClick={fetchData}>Fetch Latest Data</Button>
      </div>
      <div className="ag-theme-alpine-dark h-[600px] w-full">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          rowSelection='multiple'
        />
      </div>
    </div>
  );
}