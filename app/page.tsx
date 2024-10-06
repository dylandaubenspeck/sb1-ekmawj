"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const metrics = [
  { id: 'totalCallMinutes', title: 'Total Call Minutes', value: '1', change: '+0.00%' },
  { id: 'numberOfCalls', title: 'Number of Calls', value: '3', change: '+100.00%' },
  { id: 'totalSpent', title: 'Total Spent', value: '$0.16', change: '+0.00%' },
  { id: 'avgCostPerCall', title: 'Average Cost per Call', value: '$0.16', change: '+100.00%' },
  { id: 'callsMadeToday', title: 'Calls Made Today', value: '0', change: '0%' },
  { id: 'callsMadeThisWeek', title: 'Calls Made This Week', value: '2', change: '+100%' },
  { id: 'callsMadeThisMonth', title: 'Calls Made This Month', value: '0', change: '0%' },
];

const callEndReasons = [
  { name: 'assistant-ended-call', value: 1 },
  { name: 'customer-ended-call', value: 12 },
  { name: 'silence-timed-out', value: 1 },
];

const callTypes = [
  { type: 'Webcall', count: 5 },
  { type: 'Inbound', count: 7 },
  { type: 'Outbound', count: 2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Home() {
  const [selectedMetrics, setSelectedMetrics] = useState(metrics.slice(0, 4).map(m => m.id));

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev => 
      prev.includes(metricId) 
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Overview</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Customize Metrics <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Toggle Metrics</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {metrics.map((metric) => (
              <DropdownMenuCheckboxItem
                key={metric.id}
                checked={selectedMetrics.includes(metric.id)}
                onCheckedChange={() => toggleMetric(metric.id)}
              >
                {metric.title}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.filter(metric => selectedMetrics.includes(metric.id)).map(metric => (
          <Card key={metric.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Reasons for Call Ending</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={callEndReasons}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {callEndReasons.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4">
              {callEndReasons.map((entry, index) => (
                <div key={entry.name} className="flex items-center mt-2">
                  <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span>{entry.name}: {entry.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reasons for Call Ending</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reason</TableHead>
                  <TableHead className="text-right">Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {callEndReasons.map((reason) => (
                  <TableRow key={reason.name}>
                    <TableCell>{reason.name}</TableCell>
                    <TableCell className="text-right">{reason.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Type of Phone Call</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {callTypes.map((type) => (
                  <TableRow key={type.type}>
                    <TableCell>{type.type}</TableCell>
                    <TableCell className="text-right">{type.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}