export const handleError = (key, value, conditions) => {
    let error = ''
    let conditionKeys = Object.keys(conditions)
    for (let i = 0; i < conditionKeys.length; i++) {
      switch (conditionKeys[i]) {
        case 'required':
          error = !value && `${key.replace(/_/gi, ' ')} is required`
          break
        case 'max':
          error =
            value.length < conditions.max &&
            `${key.replace(/_/gi, ' ')} must be atleast ${conditions.max
            } charaters`
          break
        case 'regex':
          error =
            !conditions.regex.pattern.test(value) && `${conditions.regex.message}`
          break
        case 'compare':
          error =
            !(conditions.compare.a === conditions.compare.b) &&
            conditions.compare.message
          break
        default:
          error = ''
          break
      }
      if (error) {
        return error
      }
    }
}
  