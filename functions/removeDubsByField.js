const getMaxLevel = (skills) => {
  let maxSkill = skills[0];
  skills.forEach((skill) => {
    if (skill.level > maxSkill.level) {
      maxSkill = skill;
    }
  });
  return maxSkill;
}

// TODO: refactor this
const removeDubsByField = (list, field) => {
  let res = []
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    const isFound = res.map(el => el[field]).includes(element[field])
    if (!isFound) {
      const filteredSkills = list.filter(el => el[field] === element[field])
      if (filteredSkills.length === 1) {
        res = [...res, filteredSkills[0]]
      } else {
        const maxLevel = getMaxLevel(filteredSkills)
        res = [...res, maxLevel]
      }
    }
  }
  return res
}

const list = [{ name: 'test1', level: 3 }, { name: 'test1', level: 2 }, { name: 'test2', level: 2 }];
const response = removeDubsByField(list, "name")
console.log('removeDubsByField response =========================', response)