function skillsMember(skills) {
    let result = []
    for (let i = 0; i < skills.length; i++) {
        let skill = skills[i]
        if (skill.length % 2 === 0) {
            result.push(skill)
        }
    }
    return result
}