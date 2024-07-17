import { useEffect, useState } from "react";

const ProductService = () => {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState({
    text: "",
    allData: [],
    loader: false,
  });

  const handleOnchange = (val) => {
    if (info.allData.length > 0) {
      setTimeout(() => {
        let fil = info.allData.filter(
          (ele) =>
            ele?.email.toLowerCase().includes(val.toLowerCase()) ||
            `${ele?.firstName} ${ele?.maidenName} ${ele?.lastName}`
              .toLowerCase()
              .includes(val.toLowerCase()) ||
            ele?.age.toString().includes(val)
        );
        // console.log(fil);
        setUsers([...fil]);
      }, 100);
    }
    setInfo((prev) => ({
      ...prev,
      text: val,
    }));
  };
  const handleDelete = (id) => {
    let fil = info.allData.filter((ele) => ele.id !== id);
    setUsers([...fil]);
    setInfo((prev) => ({
      ...prev,
      allData: fil,
    }));
  };

  const getUsers = async () => {
    setInfo((prev) => ({
      ...prev,
      loader: true,
    }));
    let res = await fetch("https://dummyjson.com/users");
    let json = await res.json();
    // console.log(json);
    setUsers(json?.users);
    setInfo((prev) => ({
      ...prev,
      allData: json?.users,
    }));
    setInfo((prev) => ({
      ...prev,
      loader: false,
    }));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { users, handleOnchange,info, handleDelete };
};

export default ProductService;
