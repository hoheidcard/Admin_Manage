export default {
  loadMore: false,
  dataLoader: false,
  loader: false,
  organizationData: [],
  organizationBranchData: [],
  totalOrganizationBranch: 0,
  totalOrganization: 0,

  addModal: false,
  asignModal: false,
  confirmModal: false,
  statusModal: false,
  orderModal: false,
  productModal: false,

  bookCategory: [],
  classDiv: [],
  classList: [],
  createdAt: null,
  department: [],
  designation: [],
  houseZone: [],
  id: null,
  subject: [],
  type: null,
  updatedAt: null,
  staffCsvFields: null,
  studentCsvFields: null,

  csvData: [
    {
      name: "SR. No.",
      title: "SR. No.",
      status: true,
    },
    {
      name: "Reg. No.",
      title: "Reg. No.",
      status: true,
    },
    {
      name: "Admission No.",
      title: "Admission No.",
      status: false,
    },
    {
      name: "Roll No.",
      title: "Roll No.",
      status: false,
    },
    {
      name: "Unique ID",
      title: "Unique ID",
      status: false,
    },
    {
      name: "Permanent Education Number",
      title: "Permanent Education Number",
      status: false,
    },
    {
      name: "RFID Card No.",
      title: "RFID Card No.",
      status: false,
    },
    {
      name: "Aadhar No.",
      title: "Aadhar No.",
      status: false,
    },
    {
      name: "Student Name",
      title: "Student Name",
      status: true,
    },
    {
      name: "Father Name",
      title: "Father Name",
      status: false,
    },
    {
      name: "Mother Name",
      title: "Mother Name",
      status: false,
    },
    {
      name: "Guardian Name",
      title: "Guardian Name",
      status: false,
    },
    {
      name: "Student Photo Number",
      title: "Student Photo Number",
      status: true,
    },
    {
      name: "Father Photo Number",
      title: "Father Photo Number",
      status: false,
    },
    {
      name: "Mother Photo Number",
      title: "Mother Photo Number",
      status: false,
    },
    {
      name: "Guardian Photo Number",
      title: "Guardian Photo Number",
      status: false,
    },
    {
      name: "Student Contact No.",
      title: "Student Contact No.",
      status: true,
    },
    {
      name: "Father Contact No.",
      title: "Father Contact No.",
      status: false,
    },
    {
      name: "Mother Contact No.",
      title: "Mother Contact No.",
      status: false,
    },
    {
      name: "Guardian Contact No.",
      title: "Guardian Contact No.",
      status: false,
    },
    {
      name: "Student Whatsapp No.",
      title: "Student Whatsapp No.",
      status: false,
    },
    {
      name: "Father Whatsapp No.",
      title: "Father Whatsapp No.",
      status: false,
    },
    {
      name: "Mother Whatsapp No.",
      title: "Mother Whatsapp No.",
      status: false,
    },
    {
      name: "Guardian Whatsapp No.",
      title: "Guardian Whatsapp No.",
      status: false,
    },
    {
      name: "Guardian Relationship",
      title: "Guardian Relationship",
      status: false,
    },
    {
      name: "Date of Birth",
      title: "Date of Birth",
      status: false,
    },
    {
      name: "Class",
      title: "Class",
      status: false,
    },
    {
      name: "Section",
      title: "Section",
      status: false,
    },
    {
      name: "Student Address",
      title: "Student Address",
      status: false,
    },
    {
      name: "House Zone",
      title: "House Zone",
      status: false,
    },
    {
      name: "Blood Group",
      title: "Blood Group",
      status: false,
    },
    {
      name: "Gender",
      title: "Gender",
      status: false,
    },
    {
      name: "Student Email",
      title: "Student Email",
      status: false,
    },
    {
      name: "Emergency Contact No. (Father / Mother / Guardian)",
      title: "Emergency Contact No. (Father / Mother / Guardian)",
      status: false,
    },
  ],
  staffCSVData: [
    {
      name: "Employee Id",
      title: "Employee Id",
      status: true,
    },
    {
      name: "RFID Card No.",
      title: "RFID Card No.",
      status: false,
    },
    {
      name: "Aadhar No.",
      title: "Aadhar No.",
      status: false,
    },
    {
      name: "Employee Name",
      title: "Employee Name",
      status: true,
    },
    {
      name: "Employee Photo Number",
      title: "Employee Photo Number",
      status: true,
    },
    {
      name: "Employee Designation",
      title: "Employee Designation",
      status: false,
    },
    {
      name: "Employee Address",
      title: "Employee Address",
      status: false,
    },
    {
      name: "Date of Joining",
      title: "Date of Joining",
      status: false,
    },
    {
      name: "Employee Email",
      title: "Employee Email",
      status: true,
    },
    {
      name: "Employee Contact No.",
      title: "Employee Contact No.",
      status: false,
    },
    {
      name: "Date of Birth",
      title: "Date of Birth",
      status: false,
    },
    {
      name: "Gender",
      title: "Gender",
      status: false,
    },
    {
      name: "Spouse Name",
      title: "Spouse Name",
      status: false,
    },
    {
      name: "Father Name",
      title: "Father Name",
      status: false,
    },
    {
      name: "Spouse Contact No.",
      title: "Spouse Contact No.",
      status: false,
    },
    {
      name: "Father Contact No.",
      title: "Father Contact No.",
      status: false,
    },
    {
      name: "Emergency Contact No.",
      title: "Emergency Contact No.",
      status: false,
    },
  ],
};
