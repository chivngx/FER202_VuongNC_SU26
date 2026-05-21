import MyProfile from "./MyProfile";
function Footer() {
    const profile = {
    imgSrc: "/images/avatar.png",
    id: "HE198005",
    name: "Nguyen Chi Vuong",
    email: "nguyenchivuong.73@gmail.com",
    githubLink: "https://github.com/chivngx"
  };
    return (
        <>
            <footer style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center'}}>
                <MyProfile profile={profile} />
            </footer>
        </>
    );
}
export default Footer;