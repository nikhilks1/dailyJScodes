const grade = (marks) => {
    if (marks >= 80) {
        console.log("A+");
    } else if (marks >= 70) { 
        console.log("B+");
    } else if (marks >= 60) { 
        console.log("C+");
    } else { 
        console.log("F");
    }
};

grade(80); // Output: "B+"
