// mudar a forma para trazer a imagem na tela :  <image>{url}</image>
const User = ({name, description, url}) => {
  return (
      <div className='user'>
        <p>{name}</p>
        <span>{description}</span>
      </div>
  );
}

export default User;
