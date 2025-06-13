

export const employees = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    position: 'Engineering Manager',
    department: 'Engineering',
    hireDate: '2020-03-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '+1 (555) 234-5678',
    position: 'Senior Software Engineer',
    department: 'Engineering',
    manager: '1',
    hireDate: '2021-06-10',
    status: 'active',
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '+1 (555) 345-6789',
    position: 'Product Manager',
    department: 'Product',
    hireDate: '2019-11-05',
    status: 'active',
  },
  {
    id: '4',
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    phone: '+1 (555) 456-7890',
    position: 'HR Specialist',
    department: 'HR',
    hireDate: '2022-01-20',
    status: 'active',
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phone: '+1 (555) 567-8901',
    position: 'Software Engineer',
    department: 'Engineering',
    manager: '2',
    hireDate: '2022-09-15',
    status: 'active',
  },
  {
    id: '6',
    name: 'Jennifer Martinez',
    email: 'jennifer.martinez@example.com',
    phone: '+1 (555) 678-9012',
    position: 'Marketing Specialist',
    department: 'Marketing',
    hireDate: '2021-11-08',
    status: 'on-leave',
  },
];

export const jobRequisitions = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Remote)',
    experience: 'Senior',
    type: 'full-time',
    status: 'open',
    createdAt: '2023-05-10T10:00:00Z',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS'],
    description: 'We are looking for a Senior Software Engineer to join our team...',
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    experience: 'Mid Level',
    type: 'full-time',
    status: 'open',
    createdAt: '2023-06-15T14:30:00Z',
    skills: ['Product Development', 'User Research', 'Agile', 'Roadmapping'],
    description: 'We are seeking an experienced Product Manager to drive our product vision...',
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Austin, TX (Hybrid)',
    experience: 'Mid Level',
    type: 'full-time',
    status: 'on-hold',
    createdAt: '2023-04-20T09:15:00Z',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    description: 'We are looking for a talented UX/UI Designer to create amazing user experiences...',
  },
];

export const candidates = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-9876',
    appliedFor: 'Senior Software Engineer',
    matchScore: 92,
    status: 'interview',
    appliedDate: '2023-06-12T15:30:00Z',
  },
  {
    id: '2',
    name: 'Taylor Smith',
    email: 'taylor.smith@example.com',
    phone: '+1 (555) 234-8765',
    appliedFor: 'Senior Software Engineer',
    matchScore: 78,
    status: 'screening',
    appliedDate: '2023-06-14T11:45:00Z',
  },
  {
    id: '3',
    name: 'Jordan Williams',
    email: 'jordan.williams@example.com',
    phone: '+1 (555) 345-7654',
    appliedFor: 'Product Manager',
    matchScore: 85,
    status: 'new',
    appliedDate: '2023-06-20T09:00:00Z',
  },
  {
    id: '4',
    name: 'Morgan Lee',
    email: 'morgan.lee@example.com',
    phone: '+1 (555) 456-6543',
    appliedFor: 'UX/UI Designer',
    matchScore: 65,
    status: 'rejected',
    appliedDate: '2023-05-25T14:20:00Z',
  },
];

export const onboardingTasks = [
  {
    id: '1',
    title: 'Complete tax forms',
    description: 'Submit W-4 and I-9 forms',
    completed: true,
    dueDate: '2023-06-25',
    assignee: '5', // David Wilson
  },
  {
    id: '2',
    title: 'Set up workstation',
    description: 'Install required software and tools',
    completed: true,
    dueDate: '2023-06-27',
    assignee: '5', // David Wilson
  },
  {
    id: '3',
    title: 'Team introduction',
    description: 'Meet with team members',
    completed: false,
    dueDate: '2023-06-30',
    assignee: '5', // David Wilson
  },
  {
    id: '4',
    title: 'Security training',
    description: 'Complete security awareness training',
    completed: false,
    dueDate: '2023-07-05',
    assignee: '5', // David Wilson
  },
  {
    id: '5',
    title: 'First project assignment',
    description: 'Get assigned to first project and understand requirements',
    completed: false,
    dueDate: '2023-07-10',
    assignee: '5', // David Wilson
  },
];

export const goals = [
  {
    id: '1',
    title: 'Improve code review process',
    description: 'Implement and document a more efficient code review process to reduce review time by 20%',
    dueDate: '2023-09-30',
    progress: 65,
    employeeId: '2', // Emily Johnson
    status: 'in-progress',
  },
  {
    id: '2',
    title: 'Launch new product feature',
    description: 'Successfully launch the payment processing feature with less than 2% error rate',
    dueDate: '2023-08-15',
    progress: 40,
    employeeId: '3', // Michael Brown
    status: 'in-progress',
  },
  {
    id: '3',
    title: 'Improve team communication',
    description: 'Implement new communication protocols and reduce meeting time by 15%',
    dueDate: '2023-10-15',
    progress: 20,
    employeeId: '1', // John Smith
    status: 'in-progress',
  },
  {
    id: '4',
    title: 'Complete advanced React training',
    description: 'Finish the Advanced React and State Management course to improve front-end skills',
    dueDate: '2023-07-30',
    progress: 85,
    employeeId: '5', // David Wilson
    status: 'in-progress',
  },
];

export const feedback = [
  {
    id: '1',
    from: '1', // John Smith
    to: '2', // Emily Johnson
    content: 'Emily has been an exceptional team leader. Her technical expertise and ability to mentor junior developers has significantly improved team productivity.',
    rating: 5,
    date: '2023-06-10T14:00:00Z',
    type: 'manager',
  },
  {
    id: '2',
    from: '2', // Emily Johnson
    to: '5', // David Wilson
    content: 'David has shown great progress in the last quarter. His code quality has improved and he\'s becoming more proactive in suggesting solutions.',
    rating: 4,
    date: '2023-06-12T11:30:00Z',
    type: 'peer',
  },
  {
    id: '3',
    from: '5', // David Wilson
    to: '5', // Self
    content: 'I believe I\'ve made good progress on technical skills but need to improve my communication with other teams.',
    rating: 3,
    date: '2023-06-15T09:45:00Z',
    type: 'self',
  },
];

export const performanceReviews = [
  {
    id: '1',
    employeeId: '2', // Emily Johnson
    reviewerId: '1', // John Smith
    period: 'Q2 2023',
    overallRating: 4.5,
    strengths: ['Technical leadership', 'Mentoring', 'Project delivery'],
    areasOfImprovement: ['Documentation', 'Work-life balance'],
    status: 'acknowledged',
    createdAt: '2023-07-01T10:00:00Z',
  },
  {
    id: '2',
    employeeId: '5', // David Wilson
    reviewerId: '2', // Emily Johnson
    period: 'Q2 2023',
    overallRating: 3.8,
    strengths: ['Code quality', 'Learning speed', 'Teamwork'],
    areasOfImprovement: ['Communication', 'Initiative'],
    status: 'submitted',
    createdAt: '2023-07-02T14:30:00Z',
  },
  {
    id: '3',
    employeeId: '3', // Michael Brown
    reviewerId: '1', // John Smith
    period: 'Q2 2023',
    overallRating: 4.2,
    strengths: ['Product vision', 'Stakeholder management', 'User focus'],
    areasOfImprovement: ['Technical understanding', 'Delegation'],
    status: 'draft',
    createdAt: '2023-07-03T09:15:00Z',
  },
];

export const demographicData = [
  { name: 'Engineering', value: 45 },
  { name: 'Marketing', value: 20 },
  { name: 'Product', value: 15 },
  { name: 'Sales', value: 25 },
  { name: 'HR', value: 10 },
  { name: 'Finance', value: 12 },
];

export const attritionData = [
  { month: 'Jan', rate: 3.2 },
  { month: 'Feb', rate: 2.8 },
  { month: 'Mar', rate: 3.5 },
  { month: 'Apr', rate: 2.9 },
  { month: 'May', rate: 2.2 },
  { month: 'Jun', rate: 2.5 },
  { month: 'Jul', rate: 3.8 },
  { month: 'Aug', rate: 4.2 },
  { month: 'Sep', rate: 3.0 },
  { month: 'Oct', rate: 2.8 },
  { month: 'Nov', rate: 2.5 },
  { month: 'Dec', rate: 2.0 },
];

export const headcountData= [
  { department: 'Engineering', count: 45 },
  { department: 'Marketing', count: 20 },
  { department: 'Sales', count: 25 },
  { department: 'Product', count: 15 },
  { department: 'HR', count: 10 },
  { department: 'Finance', count: 12 },
];