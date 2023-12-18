const REQUIRED_TEXT = "This field is obligated"

export const nameRules = {
  required: REQUIRED_TEXT,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Only latin letters can be used"
    }
    return true
  }
}

export const emailRules = {
  required: REQUIRED_TEXT,
  validate: (value: string) => {
    if(!value.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/)) {
      return "Email must contain @ symbol and domain"
    }
    return true;
  }
}

export const passwordRules = {
  required: REQUIRED_TEXT,
  validate: (value: string) => {
    if (value.length < 6) {
      return "The password must be more than 6 symbols"
    }
    return true
  }
}