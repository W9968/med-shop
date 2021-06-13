export const CustemStyles = {
  singleValue: () => ({
    color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
  }),

  container: (provided) => ({
    ...provided,
    width: '100%',
  }),

  control: () => ({
    display: 'flex',
    padding: '5px',
    background:
      localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
  }),

  menu: (provided, state) => ({
    ...provided,
    color: state.isSelected && 'red',
    background:
      localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
  }),

  option: (provided, state) => ({
    ...provided,
    color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
    background: state.isSelected
      ? localStorage.getItem('mode') === 'light'
        ? '#ffffff'
        : '#111111'
      : 'none',
    '&:hover': {
      background:
        localStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111',
    },
  }),
}
