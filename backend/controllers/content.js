import axios from 'axios'



export const getSurahs = async (req, res, next) =>{
    try {
        const response = await axios.get('https://api.quran.com/api/v4/chapters') 
  
        res.status(200).json(response.data);

    }
    catch(error) {
        console.log(error.data);
    }
}

export const getSurahVerses = async (req, res, next) =>{
    try {
        const {chapter} = req.body;


        const response = await axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${chapter}`, {
        params: {
            words: 'false',
            per_page: 286,
            fields: 'text_uthmani,chapter_id',
            translations: 131,
            page: 1
        }
        })  // works

    res.status(200).json(response.data);


    }
    catch (error){
        console.log(error);

    }
}

