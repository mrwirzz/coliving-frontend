import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-center p-8 bg-black text-white">
      {/* Города и название */}
      <p className="text-gray-400">Warsaw – Dubai – Porto – Edinburgh</p>
      <img src="/assets/Cocoon_Icon(1).png" alt="COCOON" className="mt-2" style={{ maxWidth: "200px", maxHeight: "200px" }} />


      {/* Место для кликабельных картинок (контакты) */}
      <div className="mt-6 space-y-4">
      <a href="mailto:cocoon.city@gmail.com?subject=Hello&body=I want to contact you" 
   className="block">
  <img src="/assets/Gmail_icon_(2020).png" alt="@cocoon.city" className="w-8 h-8 mx-auto" style={{ maxWidth: "50px", maxHeight: "50px" }} />
</a>

        <a href="https://wa.me/48734663453" 
   className="block" 
   target="_blank" 
   rel="noopener noreferrer">
  <img src="/assets/WhatsApp.png" alt="+48 734 663 453" className="w-8 h-8 mx-auto" style={{ maxWidth: "50px", maxHeight: "50px" }} />
</a>

        <a href="https://www.linkedin.com/in/paulina-shaw?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
   className="block" 
   target="_blank" 
   rel="noopener noreferrer">
  <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8 mx-auto" style={{ maxWidth: "50px", maxHeight: "50px" }} />
</a>

<a href="https://www.instagram.com/cocooncoliving/?igsh=MWdhYjlna3ZmbW5xdQ%3D%3D#" 
   className="block" 
   target="_blank" 
   rel="noopener noreferrer">
  <img src="/assets/instagram.png" alt="Instagram" className="w-8 h-8 mx-auto" style={{ maxWidth: "50px", maxHeight: "50px" }} />
</a>
      </div>
    </footer>
  );
};
  export default Footer;