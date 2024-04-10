
import '../style/Education.css'; // Import CSS file for styling

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p id='p'>Education</p>
        <button className="download-button">DOWNLOAD RESUME</button>
      </div>
      <div className="matrix-table">
        <table>
          <tbody>
            <tr>
              <td><img src="http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/behance.png" alt="Image 3" style={{width: '190px', height: '100px'}} /></td>
              <td className='Year'>2019-2020 <p>Benance</p></td>
              <td className='data'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum ad veritatis rerum voluptas molestiae </td>
            </tr>
            <tr>
              <td><img src="http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/envato.png" alt="Image 1" style={{width: '190px', height: '100px'}} /></td>
              <td className='Year'>2017-2018 <p>Envato</p></td>
              <td className='data'>similique nobis enim molestias numquam tenetur, repellendus hic at voluptatibus voluptates debitis iure consequuntur animi!</td>
            </tr>
            <tr>
              <td><img src="http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/twitter.png" alt="Image 2" style={{width: '190px', height: '100px'}} /></td>
              <td className='Year'>2015-2018  <p>Twitter</p></td>
              <td className='data'>similique nobis enim molestias numquam tenetur, repellendus hic at voluptatibus voluptates debitis iure consequuntur animi!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Education;

