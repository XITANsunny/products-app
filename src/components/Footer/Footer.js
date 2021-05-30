import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      We take the Responsible Service of Alcohol seriously.
      <br />
      LIQUOR ACT 2007. It is against the law to sell or supply alcohol to, or to
      obtain liquor on behalf of, a person under the age of 18 years.
      <br />
      For more specific legislation in your state or territory visit our Liquor
      Licences page.
    </div>
  );
};

export default Footer;
