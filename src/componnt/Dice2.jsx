import UtilAxios from "../Util/axios";

async function Dice2 (){
    let roundom = Math.ceil(Math.random() * 6)
    localStorage.setItem('roundomDice2', roundom);
    let s = await UtilAxios.Get("http://localhost:3010/Geme/GetPlayerSteps2")
    let temp = s.GetIt + roundom - 100;
    let x = roundom + s.GetIt > 100 ? (100 - temp) :
        roundom + s.GetIt < 100 ? (roundom + s.GetIt) :
            roundom + s.GetIt === 100 ? viner() : null;

    x = x === 4 ? 14 :
        x === 8 ? 37 :
            x === 22 ? 32 :
                x === 43 ? 63 :
                    x === 45 ? 55 :
                        x === 60 ? 79 :
                            x === 62 ? 82 :
                                x === 78 ? 88 :
                                    x === 23 ? 13 :
                                        x === 30 ? 19 :
                                            x === 51 ? 41 :
                                                x === 68 ? 47 :
                                                    x === 83 ? 47 :
                                                        x;
    function viner(params) {
        alert("שמואל החמוד ניצח")
        return roundom + s.GetIt
    }
    return x
}
export default Dice2;