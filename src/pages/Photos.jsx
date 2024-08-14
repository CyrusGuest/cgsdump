import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../../images/albums/4-5-2024.jpg";
import image2 from "../../images/albums/4-14-2024.jpg";
import image3 from "../../images/albums/4-20-2024.jpg";
import image4 from "../../images/albums/6-15-2024.jpg";
import image5 from "../../images/albums/6-29-2024.jpg";
import image6 from "../../images/albums/6-30-2024.jpg";
import image7 from "../../images/albums/7-8-2024.jpg";
import image8 from "../../images/albums/7-9-2024.jpg";
import image9 from "../../images/albums/7-11-2024.jpg";
import image10 from "../../images/albums/7-19-2023.jpg";
import image11 from "../../images/albums/7-20-2023.jpg";
import image12 from "../../images/albums/7-21-2023.jpg";
import image13 from "../../images/albums/7-23-2024.jpg";
import image14 from "../../images/albums/7-25-2024.jpg";
import image15 from "../../images/albums/8-1-2024.jpg";
import image16 from "../../images/albums/8-12-2024.jpg";
import image17 from "../../images/albums/8-5-2024.jpg";
import image18 from "../../images/albums/9-7-2023.jpg";
import Album from "../components/Album";

const defaultAlbumImages = [
  {
    image: image1,
    date: "4/5/2024",
    link: "https://adobe.ly/3YF63PD",
    private: true,
  },
  {
    image: image2,
    date: "4/14/2024",
    link: "https://adobe.ly/3YIwXG3",
    private: false,
  },
  {
    image: image3,
    date: "4/20/2024",
    link: "https://adobe.ly/4fJey24",
    private: true,
  },
  {
    image: image4,
    date: "6/15/2024",
    link: "https://adobe.ly/3M3m5Ly",
    private: false,
  },
  {
    image: image5,
    date: "6/29/2024",
    link: "https://adobe.ly/3M5cOmf",
    private: false,
  },
  {
    image: image6,
    date: "6/30/2024",
    link: "https://adobe.ly/3M5DWBC",
    private: false,
  },
  {
    image: image7,
    date: "7/8/2024",
    link: "https://adobe.ly/4cUD51N",
    private: false,
  },
  {
    image: image8,
    date: "7/9/2024",
    link: "https://adobe.ly/3SIaghp",
    private: true,
  },
  {
    image: image9,
    date: "7/11/2024",
    link: "https://adobe.ly/4dHzB34",
    private: false,
  },
  {
    image: image10,
    date: "7/19/2023",
    link: "https://adobe.ly/3yFJnEe",
    private: false,
  },
  {
    image: image11,
    date: "7/20/2023",
    link: "https://adobe.ly/3SJAArO",
    private: false,
  },
  {
    image: image12,
    date: "7/21/2023",
    link: "https://adobe.ly/4dIzc0o",
    private: false,
  },
  {
    image: image13,
    date: "7/23/2024",
    link: "https://adobe.ly/4dHzJQ6",
    private: false,
  },
  {
    image: image14,
    date: "7/25/2024",
    link: "https://adobe.ly/3Sr39Kq",
    private: false,
  },
  {
    image: image15,
    date: "8/1/2024",
    link: "https://adobe.ly/3yAxHTe",
    private: true,
  },
  {
    image: image16,
    date: "8/11/2024",
    link: "https://adobe.ly/3X20Q2T",
    private: true,
  },
  {
    image: image17,
    date: "8/5/2024",
    link: "https://adobe.ly/3YuSj9R",
    private: true,
  },
  {
    image: image18,
    date: "9/7/2023",
    link: "https://adobe.ly/4dkmAwV",
    private: false,
  },
];

const Photos = () => {
  // Album images with their corresponding dates
  const [albumImages, setAlbumImages] = useState(defaultAlbumImages);
  const [auth, setAuth] = useState(false);
  const [showPasswordWindow, setShowPasswordWindow] = useState(false);
  const [password, setPassword] = useState("");
  let { MobileNavOpen } = useContext(AppContext);
  const [failedPassword, setFailedPassword] = useState(false);

  const checkPassword = (e) => {
    e.preventDefault();

    if (password === "PVZGW2") {
      setAuth(true);
      setShowPasswordWindow(false);
      setAlbumImages(defaultAlbumImages);
    } else {
      setFailedPassword(true);
      setPassword("");
    }
  };

  useEffect(() => {
    if (!auth) {
      setAlbumImages(albumImages.filter((album) => album.private === false));
    } else {
      setAlbumImages(defaultAlbumImages);
    }
  }, [auth]);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      {showPasswordWindow && (
        <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-80 mb-40 p-8 border-2 border-primary rounded-lg flex flex-col">
            <h3 className="text-3xl font-bold text-center">enter password</h3>
            <p className="text-sm text-[#999999] text-center mb-6">
              enter the password to gain access to private albums.
            </p>
            <input
              type="password"
              className="border text-xl border-gray-300 rounded-md px-3 py-2 mb-4 outline-none"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {failedPassword === true && (
              <p className="text-red-500 mb-4">
                wrong password. please try again
              </p>
            )}
            <button
              className="bg-primary text-white text-2xl font-bold px-4 py-2 mt-40 rounded-md"
              onClick={(e) => checkPassword(e)}
            >
              enter
            </button>
            <p
              className=" text-primary underline  text-center px-4 mt-1 rounded-md"
              onClick={() => setShowPasswordWindow(false)}
            >
              cancel
            </p>
          </div>
        </div>
      )}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />
        <h1 className="md:max-w-2xl text-primary max-w-sm mx-auto mt-10 md:mt-14 text-center text-4xl md:text-6xl font-bold">
          photos by the day
        </h1>
        <h3 className="mt-2 md:max-w-2xl max-w-md mx-auto px-2 text-xl md:text-2xl text-[#999999] text-center">
          Below you can view all my public albums now, or you can enter the
          password to view all public and private albums.
        </h3>

        <div className="flex flex-col mt-4">
          {!auth ? (
            <button
              className="drop-shadow-xl p-4 bg-primary rounded-xl flex mx-auto"
              onClick={() => setShowPasswordWindow(true)}
            >
              <h3 className="font-bold text-2xl text-white my-auto">
                enter password
              </h3>
            </button>
          ) : (
            <p className="text-center text-[#999999] mt-2">
              you're now viewing all albums, including private albums.
            </p>
          )}
        </div>

        <hr className="mt-8" />

        <div className="grid grid-cols-2 gap-2 md:gap-6 mx-auto mt-8 max-w-2xl">
          {albumImages.map((album, index) => (
            <Album
              key={index}
              image={album.image}
              date={album.date}
              link={album.link}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Photos;
