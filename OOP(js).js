class HospitalEmployee {
    name;
    remainingVacationDays;
    daysOff;

  constructor(name) {
    this.name = name;
    this.remainingVacationDays = 20;
  }
  
  get name() {
    return this.name;
  }
  
  get remainingVacationDays() {
    return this.remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this.remainingVacationDays -= daysOff;
  }

  #generatePassword() {
    return Math.floor(Math.random() * 10000)
  }

}

class Nurse extends HospitalEmployee {
    name;
    certifications;
    newCertification;


  constructor(name, certifications) {
    super(name);
    this.certifications = certifications;
  } 
  
  get certifications() {
    return this.certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);