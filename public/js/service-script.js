var btns = document.getElementsByClassName("item-left");
console.log(btns);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-service-inside");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active-service-inside", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active-service-inside";
    });
}


// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("item");
console.log(btns);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-service");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active-service", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active-service";
        let title;
        if(this.innerHTML === "DOB") {
            title = "Department of Buildings";
            document.getElementById('dob').style.display = 'block';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "FDNY") {
            title = "New York City Fire Department";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'block';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "LPC") {
            title = "Landmarks Preservation Commission";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'block';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "HPD") {
            title = "Department of Housing Preservation";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'block';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "DOT") {
            title = "Department of Transportation";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'block';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "DEC") {
            title = "Department of Environmental Control";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'block';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "DCP") {
            title = "Department of City Planning";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'block';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "PDST") {
            title = "Parks Department and Street Trees";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'block';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "MTA") {
            title = "Metropolitan Transportation Authority";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'block';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "DCA") {
            title = "Department of Consumer Affairs";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'block';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "OATH") {
            title = "Office of Administrative Trials and Hearings";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'block';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "ECB") {
            title = "Environmental Control Board";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'block';
            document.getElementById('topo').style.display = 'none';
        }
        else if(this.innerHTML === "TOPO") {
            title = "Topographical Bureau";
            document.getElementById('dob').style.display = 'none';
            document.getElementById('fdny').style.display = 'none';
            document.getElementById('lpc').style.display = 'none';
            document.getElementById('hpd').style.display = 'none';
            document.getElementById('dot').style.display = 'none';
            document.getElementById('dec').style.display = 'none';
            document.getElementById('dcp').style.display = 'none';
            document.getElementById('pdst').style.display = 'none';
            document.getElementById('mta').style.display = 'none';
            document.getElementById('dca').style.display = 'none';
            document.getElementById('oath').style.display = 'none';
            document.getElementById('ecb').style.display = 'none';
            document.getElementById('topo').style.display = 'block';
        }

        document.getElementById("title-text").innerHTML = title;
    });
}

document.getElementById('dob1').addEventListener('click', function (){
    document.getElementById('dob-description').innerHTML = '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit eleifend enim. Cras eleifend lorem sit amet odio consectetur tempus. Mauris et metus id turpis varius luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
});

document.getElementById('dob2').addEventListener('click', function (){
    document.getElementById('dob-description').innerHTML = '2 this is the second text.'
});

