import React from 'react';
import { Users, UserPlus, Award, Brain, TrendingUp, Check, CheckCircle, Star } from 'lucide-react';
import AnalyticsWidgets from '../components/AnalyticsWidgets';
import { demographicData, attritionData, headcountData, employees, candidates, goals } from '../data/mockData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Sidebar from '../components/layout/Sidebar';
const Dashboard = () => {
  const stats = [
    { 
      title: 'Total Employees', 
      value: employees.length,
      trend: 'up',
      icon: <Users className="text-indigo-500" />,
    },
    { 
      title: 'Open Positions', 
      value: 8,
      trend: 'up',
      icon: <UserPlus className="text-blue-500" />,
    },
    { 
      title: 'Active Candidates', 
      value: candidates.filter(c => c.status !== 'rejected' && c.status !== 'hired').length,
      trend: 'up',
      icon: <CheckCircle className="text-green-500" />,
    },
   
  ];

  return (
    <div className="space-y-6">
       
      <h1 className="text-2xl font-bold mb-4 ">HR Dashboard</h1>
       
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent>
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <div className="flex items-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-2">{stat.value}</h3>
                    
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 ">HR Analytics</h2>
        <AnalyticsWidgets 
          demographicData={demographicData}
          attritionData={attritionData}
          headcountData={headcountData}
        />
      </div>
      
     
    </div>
  );
};

export default Dashboard;