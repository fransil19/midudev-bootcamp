export const Languages = ({languages}) => {
    const listLanguages = Object.keys(languages).map(i => languages[i])
    return (
      <ul>
        {
          listLanguages.map(lang => {
            return <li key={lang}>{lang}</li>
          })
        }
      </ul>
    )
  }