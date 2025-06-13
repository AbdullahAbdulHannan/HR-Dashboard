import React from 'react';
import { Card, CardContent, Chip, LinearProgress, Typography, Box, Avatar, Tooltip } from '@mui/material';
import { goals, employees, performanceReviews, feedback} from '../data/mockData';
import { Star, User, MessageCircle } from 'lucide-react';

const getEmployee = (id) => employees.find(e => e.id === id) || {};

const avgReviewScore = (performanceReviews.reduce((sum, r) => sum + r.overallRating, 0) / performanceReviews.length).toFixed(2);
const goalsInProgress = goals.filter(g => g.status === 'in-progress').length;
const feedbackCount = feedback.length;

const Performance = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Performance</h1>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardContent className="flex items-center gap-4">
            <User className="text-indigo-600" size={32} />
            <div>
              <Typography variant="h6">Goals In Progress</Typography>
              <Typography variant="h4" className="font-bold">{goalsInProgress}</Typography>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-100">
          <CardContent className="flex items-center gap-4">
            <Star className="text-yellow-500" size={32} />
            <div>
              <Typography variant="h6">Avg. Review Score</Typography>
              <Typography variant="h4" className="font-bold">{avgReviewScore}</Typography>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-100">
          <CardContent className="flex items-center gap-4">
            <MessageCircle className="text-green-500" size={32} />
            <div>
              <Typography variant="h6">Feedback Entries</Typography>
              <Typography variant="h4" className="font-bold">{feedbackCount}</Typography>
            </div>
          </CardContent>
        </Card>
      </div>

    
      <div>
        <h2 className="text-xl font-semibold mb-3">Performance Goals</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow border border-gray-100">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Goal</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Owner</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Due Date</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Progress</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {goals.map(goal => {
                const owner = getEmployee(goal.employeeId);
                return (
                  <tr key={goal.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div className="font-medium text-gray-900">{goal.title}</div>
                      <div className="text-xs text-gray-500">{goal.description}</div>
                    </td>
                    <td className="p-3 flex items-center gap-2">
                      <Avatar sx={{ width: 28, height: 28, fontSize: 14 }}>{owner.name ? owner.name[0] : '?'}</Avatar>
                      <span>{owner.name}</span>
                    </td>
                    <td className="p-3 text-gray-700">{goal.dueDate}</td>
                    <td className="p-3 min-w-[120px]">
                      <Box display="flex" alignItems="center" gap={1}>
                        <LinearProgress variant="determinate" value={goal.progress} sx={{ width: 80, height: 8, borderRadius: 5 }} />
                        <span className="text-xs text-gray-600 font-medium">{goal.progress}%</span>
                      </Box>
                    </td>
                    <td className="p-3">
                      <Chip label={goal.status.replace('-', ' ')} color={goal.status === 'in-progress' ? 'primary' : 'default'} size="small" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Reviews */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Recent Performance Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performanceReviews.map(review => {
            const employee = getEmployee(review.employeeId);
            const reviewer = getEmployee(review.reviewerId);
            return (
              <Card key={review.id} className="border border-gray-100 shadow-sm">
                <CardContent>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar>{employee.name ? employee.name[0] : '?'}</Avatar>
                    <div>
                      <div className="font-medium text-gray-900">{employee.name}</div>
                      <div className="text-xs text-gray-500">Reviewed by {reviewer.name}</div>
                    </div>
                    <Chip label={review.status} size="small" className="ml-auto" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-500" size={18} />
                    <span className="font-semibold text-lg">{review.overallRating}</span>
                    <span className="text-xs text-gray-500">({review.period})</span>
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold text-gray-700">Strengths:</span>
                    <span className="text-gray-600 text-sm"> {review.strengths.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Areas to Improve:</span>
                    <span className="text-gray-600 text-sm"> {review.areasOfImprovement.join(', ')}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Feedback */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Recent Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedback.map(fb => {
            const from = getEmployee(fb.from);
            const to = getEmployee(fb.to);
            return (
              <Card key={fb.id} className="border border-gray-100 shadow-sm">
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Tooltip title={from.name}><Avatar sx={{ width: 28, height: 28, fontSize: 14 }}>{from.name ? from.name[0] : '?'}</Avatar></Tooltip>
                    <span className="text-xs text-gray-500">to</span>
                    <Tooltip title={to.name}><Avatar sx={{ width: 28, height: 28, fontSize: 14 }}>{to.name ? to.name[0] : '?'}</Avatar></Tooltip>
                    <Chip label={fb.type} size="small" className="ml-auto" />
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(fb.rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400" />)}
                  </div>
                  <div className="text-gray-700 text-sm line-clamp-3">{fb.content}</div>
                  <div className="text-xs text-gray-400 mt-2">{new Date(fb.date).toLocaleDateString()}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Performance;