const favoriteUtils = {
    check: ({listFavorites, mediaid}) => listFavorites && listFavorites.find(e => e.mediaid.toString()  === mediaid.toString() ) !== undefined
};


export default favoriteUtils