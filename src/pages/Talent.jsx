import React, { useState } from 'react'
import Acquisition from '../components/Acquisition'
import { CheckCircle, FileText, MessageSquare, UserPlus } from 'lucide-react';
import Modal from '../components/Modal';
import { Button, Chip } from '@mui/material';
import { jobRequisitions, candidates } from '../data/mockData';

const Talent = () => {
    const dashboardData = {
        overview: {
          totalEmployees: 245,
          openPositions: 12,
          activeReviews: 28,
          avgPerformance: 4.2
        },
        recruitment: {
          applications: 156,
          interviewed: 42,
          offers: 8,
          hired: 3
        },
        performance: {
          goalsCompleted: 78,
          reviewsCompleted: 85,
          teamSatisfaction: 4.1
        }
      };

  // Modal state
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Helper to get application count for a job
  const getApplicationCount = (jobTitle) =>
    candidates.filter(c => c.appliedFor === jobTitle).length;

  // Helper to get time since posted
  const getTimeSincePosted = (dateString) => {
    const now = new Date();
    const posted = new Date(dateString);
    const diffMs = now - posted;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 30) return `${diffDays} days ago`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return '1 month ago';
    return `${diffMonths} months ago`;
  };

  return (
    <div className='space-y-6'>
        <h1 className="text-2xl font-bold mb-4">Talent Acquisition</h1>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Acquisition
          title="Applications"
          value={dashboardData.recruitment.applications}
          subtitle="This month"
          icon={FileText}
        />
        <Acquisition
          title="Interviewed"
          value={dashboardData.recruitment.interviewed}
          subtitle="In pipeline"
          icon={MessageSquare}
          color="green"
        />
        <Acquisition
          title="Offers Made"
          value={dashboardData.recruitment.offers}
          subtitle="Pending response"
          icon={CheckCircle}
          color="purple"
        />
        <Acquisition
          title="Hired"
          value={dashboardData.recruitment.hired}
          subtitle="This month"
          icon={UserPlus}
          color="yellow"
        />
      </div>

      {/* Job Cards Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Open Job Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobRequisitions.map(job => (
            <div key={job.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                  <Chip label={job.status === 'open' ? 'Open' : job.status === 'on-hold' ? 'On Hold' : 'Closed'} color={job.status === 'open' ? 'success' : job.status === 'on-hold' ? 'warning' : 'default'} size="small" />
                </div>
                <div className="text-sm text-gray-500 mb-1">{job.department} &bull; {job.location}</div>
                <div className="text-xs text-gray-400 mb-3">Posted {getTimeSincePosted(job.createdAt)}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-indigo-600 font-semibold">{getApplicationCount(job.title)}</span>
                  <span className="text-gray-500">applications</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {job.skills.map(skill => (
                    <span key={skill} className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              <Button variant="contained" color="primary" onClick={() => { setSelectedJob(job); setModalOpen(true); }}>
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedJob ? selectedJob.title : ''}
        size="md"
      >
        {selectedJob && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Chip label={selectedJob.status === 'open' ? 'Open' : selectedJob.status === 'on-hold' ? 'On Hold' : 'Closed'} color={selectedJob.status === 'open' ? 'success' : selectedJob.status === 'on-hold' ? 'warning' : 'default'} size="small" />
              <span className="text-gray-500 text-sm">{selectedJob.department} &bull; {selectedJob.location}</span>
            </div>
            <div className="text-gray-700 text-sm">Experience: <span className="font-medium">{selectedJob.experience}</span></div>
            <div className="text-gray-700 text-sm">Type: <span className="font-medium">{selectedJob.type}</span></div>
            <div className="text-gray-700 text-sm">Posted: <span className="font-medium">{getTimeSincePosted(selectedJob.createdAt)}</span></div>
            <div className="text-gray-700 text-sm">Applications: <span className="font-medium">{getApplicationCount(selectedJob.title)}</span></div>
            <div className="text-gray-700 text-sm">Skills:</div>
            <div className="flex flex-wrap gap-2">
              {selectedJob.skills.map(skill => (
                <span key={skill} className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">{skill}</span>
              ))}
            </div>
            <div className="text-gray-700 text-sm mt-2">{selectedJob.description}</div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Talent