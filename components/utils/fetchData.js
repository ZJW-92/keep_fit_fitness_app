export const exerciseOptions = {
  method: 'GET',
  //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'a58233844bmshf00a5cc67bd2439p1ab68cjsn1904d300e3d9',
    //f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85
    //7f44f0ec90msheed9296a372f1c6p184d4djsn408d803b8daf
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
 
  return data;
};
