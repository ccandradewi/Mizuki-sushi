function Teams({ image, name, title, description }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}

export default Teams;
