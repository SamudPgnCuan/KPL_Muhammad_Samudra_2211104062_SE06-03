const fs = require('fs');

class TeamMembers {
  readJson(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(data);

      console.log("Team member list:");
      jsonData.members.forEach(member => {
        const fullName = `${member.firstName} ${member.lastName}`;
        const info = `(${member.age} ${member.gender})`;
        console.log(`${member.nim} ${fullName} ${info}`);
      });
    } catch (error) {
      console.error("Error reading or parsing JSON:", error.message);
    }
  }
}

const reader = new TeamMembers();
reader.readJson('./07_Grammar-Based_Input_Processing_Parsing/Jurnal/jurnal7_2_2211104062.json');