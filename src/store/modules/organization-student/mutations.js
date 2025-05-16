export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};
export const SET_LOADER_BUTTON = (state, status) => {
  state.loaderButton = status;
};
export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};
export const ALL_STUDENT_DATA = (state, data) => {
  state.studentData = data.result;
  state.totalStudent = data.total;
};

export const ALL_CLASS_DATA = (state, data) => {
  state.classData = data.result;
  state.totalClass = data.total;
};

function groupBy(array) {
  // Group items by class
  return array.reduce((acc, item) => {
    const classListName = item.classList.name;
    const classDivName = item.classDiv ? item.classDiv.name : "";

    const key = classListName + classDivName;
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, []);
}

// const groupedData = groupBy(data.result);
// console.log(groupedData);

function chunkArrayByClassAndSize(array, size) {
  const chunks = [];
  let currentChunk = [];
  let currentClassListName = null;
  let currentClassDivName = null;

  array.forEach((item) => {
    const itemClassListName = item.classList.name;
    const itemClassDivName = item.classDiv?.name || '';

    // Check if the item has a different classList.name or classDiv.name
    if (
      itemClassListName !== currentClassListName ||
      itemClassDivName !== currentClassDivName
    ) {
      // Push the currentChunk if it's not empty
      if (currentChunk.length > 0) {
        chunks.push(currentChunk);
      }
      // Start a new chunk and update current class names
      currentChunk = [];
      currentClassListName = itemClassListName;
      currentClassDivName = itemClassDivName;
    }

    // Add the item to the current chunk
    currentChunk.push(item);

    // If the current chunk reaches the specified size, push it to chunks and start a new one
    if (currentChunk.length === size) {
      chunks.push(currentChunk);
      currentChunk = [];
    }
  });

  // Push the last chunk if it's not empty
  if (currentChunk.length > 0) {
    chunks.push(currentChunk);
  }

  return chunks;
}

export const STUDENT_CARD_DATA = (state, data) => {
  // console.log(data.result)
  state.studentCardData = chunkArrayByClassAndSize(data.result, 18);
  state.totalCardStudent = data.total;
};


export const STUDENT_FINAL_CARD_DATA = (state, data) => {
  state.studentCardData = data.result;
  state.totalCardStudent = data.total;
};

export const STUDENT_DETAILS = (state, data) => {
  state.id = data.id;
  state.regNo = data.regNo;
  state.srNo = data.srNo;
  state.UID = data.UID;
  state.PEN = data.PEN;
  state.photoNumber = data.photoNumber;
  state.studentNo = data.studentNo;
  state.admissionNo = data.admissionNo;
  state.rollNo = data.rollNo;
  state.rfidNo = data.rfidNo;
  state.name = data.name;
  state.aadharNumber = data.aadharNumber;
  state.emailId = data.emailId;
  state.guardianRelation = data.guardianRelation;
  state.cast = data.cast;
  state.religion = data.religion;
  state.nationality = data.nationality;
  state.contactNo = data.contactNo;
  state.altContactNo = data.altContactNo;
  state.emergencyNumber = data.emergencyNumber;
  state.bloodGroup = data.bloodGroup;
  state.address = data.address;
  state.city = data.city;
  state.state = data.state;
  state.pincode = data.pincode;
  state.profile = data.profile;
  state.profileName = data.profileName;
  state.fatherImage = data.fatherImage;
  state.fatherImageName = data.fatherImageName;
  state.motherImage = data.motherImage;
  state.motherImageName = data.motherImageName;
  state.guardianImage = data.guardianImage;
  state.guardianImageName = data.guardianImageName;
  state.gender = data.gender;
  state.dob = data.dob;
  state.fatherName = data.fatherName;
  state.fatherContactNo = data.fatherContactNo;
  state.fatherOccupation = data.fatherOccupation;
  state.fatherIncome = data.fatherIncome;
  state.motherName = data.motherName;
  state.motherContactNo = data.motherContactNo;
  state.motherOccupation = data.motherOccupation;
  state.motherIncome = data.motherIncome;
  state.guardianName = data.guardianName;
  state.guardianContactNo = data.guardianContactNo;
  state.guardianOccupation = data.guardianOccupation;
  state.guardianIncome = data.guardianIncome;
  state.transport = data.transport;
  state.stream = data.stream;
  state.canteen = data.canteen;
  state.library = data.library;
  state.hostel = data.hostel;
  state.card = data.card;
  state.status = data.status;
  state.createdAt = data.createdAt;
  state.updatedAt = data.updatedAt;
  state.accountId = data.accountId;
  state.updatedId = data.updatedId;
  state.settingId = data.settingId;
  state.organizationDetail = data.organizationDetail;
  state.classList = data.classList;
  state.classDiv = data.classDiv;
  state.houseZone = data.houseZone;
  state.classListId = data.classListId;
  state.classDivId = data.classDivId;
  state.houseZoneId = data.houseZoneId;
};

export const UNSTUDENT_DETAILS = (state, data) => {
  state.id = null;
  state.regNo = null;
  state.srNo = null;
  state.UID = null;
  state.PEN = null;
  state.photoNumber = null;
  state.studentNo = null;
  state.admissionNo = null;
  state.rollNo = null;
  state.rfidNo = null;
  state.name = null;
  state.aadharNumber = null;
  state.emailId = null;
  state.guardianRelation = null;
  state.cast = null;
  state.religion = null;
  state.nationality = null;
  state.contactNo = null;
  state.altContactNo = null;
  state.emergencyNumber = null;
  state.bloodGroup = null;
  state.address = null;
  state.city = null;
  state.state = null;
  state.pincode = null;
  state.profile = null;
  state.profileName = null;
  state.fatherImage = null;
  state.fatherImageName = null;
  state.motherImage = null;
  state.motherImageName = null;
  state.guardianImage = null;
  state.guardianImageName = null;
  state.gender = null;
  state.dob = null;
  state.fatherName = null;
  state.fatherContactNo = null;
  state.fatherOccupation = null;
  state.fatherIncome = null;
  state.motherName = null;
  state.motherContactNo = null;
  state.motherOccupation = null;
  state.motherIncome = null;
  state.guardianName = null;
  state.guardianContactNo = null;
  state.guardianOccupation = null;
  state.guardianIncome = null;
  state.transport = null;
  state.stream = null;
  state.canteen = null;
  state.library = null;
  state.hostel = null;
  state.card = null;
  state.status = null;
  state.createdAt = null;
  state.updatedAt = null;
  state.accountId = null;
  state.updatedId = null;
  state.settingId = null;
  state.organizationDetail = null;
  state.classList = null;
  state.classDiv = null;
  state.houseZone = null;
  state.classListId = null;
  state.classDivId = null;
  state.houseZoneId = null;
};

export const UPDATE_STUDENT_STATUS = (state, data) => {
  const objIndex = state.studentData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.studentData[objIndex].status = data.status;
  }
};
