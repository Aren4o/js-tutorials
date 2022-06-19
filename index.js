//1) Object , 5 property , if else if, 

const me = {
    name : "Aren",
    surname : "Kharatyan",
    city : "Yerevan",
    work : "Barmen",
    hobby : "Chess"
};
function propertyStugum (meObj){
    if(me.name !== "Aren"){
        console.log(false);
    }
    else if(me.surname !== "Kharatyan"){
        console.log(false);
    }
    else if(me.city !== "Yerevan"){
        console.log(false);
    }
    else if(me.work !== "Barmen"){
        console.log(false);
    }
    else if(me.hobby !== "Chess"){
        console.log(false);
    }
    else{
        console.log(true);
    }

}
propertyStugum(me);


//2) 4 hat switch 2 y tiv, 2 y string

function nameAnimals(name) {
    switch(name) {
        case "shun" : console.log("Hachacox");break;
        case "katu" : console.log("Shataker");break;
        case "vozni" : console.log("Alarkot");break;
        case "tutak" : console.log("Shataxos");break;
        case "kria" : console.log("Dandalosh");break;
        default : console.log("Chka espisi kendani");
    }
}

nameAnimals("tutak");




function footballTeams(PL) {
    switch(PL) {
        case "ManchesterUnited" :
            console.log("Ryan Giggs");
            break;
        case "Liverpool" :
            console.log("Stiven Gerrard");
            break;
        case "Totanham" :
            console.log("Harry Keyn");
            break;
        case "ManchesterCity" :
            console.log("Vencan Company");
            break;
        case "Chelsea" :
            console.log("Frank Lampard");
            break;
        case "Arsenal" :
            console.log("Thiery Henry");
            break;
        default :
            console.log("Chka espisi tim");
    }
}   

footballTeams("Chelsea");




const num = 800;
switch(num){
    case 1 : console.log(false);break;
    case 10 : console.log(false);break;
    case 100 : console.log(false);break;
    case 100 * 8 : console.log("really true");break;
    default : console.log("Number is not difined");
}


function myAge(age){
    const myAge = 25;
    switch(age){
        case 24 :
            console.log(false);
            break;  
        case 22 :
            console.log(false);
            break;
        case 23 :
            console.log(false);
            break;
        case 25 :
            console.log(true);
            break;
        case 30 :
            console.log(false);
            break;
        default:
            console.log("Ho du hivand ches??");
    }   
}
myAge(25);

//3) switchi mej if else u ternary

const nissan = "murch";
const toyota = "camry";
switch(nissan){
    case "murch":
        if(toyota === "camry"){
           console.log("Sa chiht e");
        }else{
            console.log("Sxal");
        }
        break;
    default:
        console.log("Chi gtnvel");
}

const honda = "accord";
switch(honda){
    case "accord":
        honda === "accord" ? console.log("Sa nuynpes chisht e") : console.log("Sxalmunq");
        break;
        default:
            console.log("Senc avto chka");
}