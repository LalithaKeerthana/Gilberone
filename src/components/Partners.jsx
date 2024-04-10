
import '../style/Partners.css'; 
const Partners = () => {
  // Define your partners data here
  const partnersData = [
    { name: 'Partner 1', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-01.png' },
    { name: 'Partner 2', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-02.png' },
    { name: 'Partner 3', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-03.png' },
    { name: 'Partner 4', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-04.png' },
    { name: 'Partner 5', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-05.png' },
    { name: 'Partner 6', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-06.png' },
    { name: 'Partner 7', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-07.png' },
    { name: 'Partner 8', logoUrl: 'http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/logo-08.png' },
    // Add more partner objects as needed
  ];

  return ( 
    <div className="partners">
      <p className='p'>Partners</p>
      <div className="partner-list">
        {partnersData.map((partner, index) => (
          <div className="partner" key={index}>
            <img src={partner.logoUrl} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Partners;
