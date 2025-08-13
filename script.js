let left = `
<div class="cover" id="cover"></div>
<div class="left" id="left">
<form action="connect.php" method="post" class="form left_form">
    <h2 class="Sign_up">Sign up</h2>
    <div class="user_name">
        <label for="user_name">User name:</label>
        <br>
        <input type="text" class="form-control" id="user_name" name="UserName" placeholder="Enter your username">
    </div>
    <div class="create_password">
        <label for="log_in_password">Password:</label>
        <br>
        <input type="password" class="form-control" id="log_in_password" name="Password" placeholder="Create your password">
    </div>
    <div class="Confirm_password">
        <label for="confirm_password">Confirm password:</label>
        <br>
        <input type="password" id="confirm_password" class="form-control" name="confirm_password" placeholder="Confirm your password">
    </div>
    <div class="" style="padding:10px;">
        <input type="submit" class="btn btn-primary signupButton" placeholder="Sign up">
    </div>
    <button type="button" id="Already" onclick="toggleMenu()" >Already have an account? Log in</button>
</form>
</div>`;

let right = `
<div class="cover" id="cover"></div>    
<div class="right" id="right">
<form action="connect.php" method="post" class="form">
        <h3>Log in</h3>
    <div class="form-group">
        <label for="email">Email</label>
        <br>
        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email">
    </div>
    <div class="form-group-password">
        <label for="password">Password</label>
        <br>
        <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password">
        <div class="form-group-label">
            <input type="checkbox" name="seePassword" id="seePassword">
            <label for="seePassword">Show password</label>
        </div>
    </div>
    <div>
    <button type="submit" class="btn btn-primary signupButton">Log in</button>
    </div>
    <div class="divisionintotwopart">
        <span>
            <hr>
            <pre class="or">  or  </pre>
            <hr>
        </span>
    </div>
    <span class="googleragistionbutton">
        <img src="https://logopng.com.br/logos/google-37.png" alt="Google">
        <button style="border:0px solid transparent; background-color: transparent;">Continue with Google</button>
    </span>
    <div style="display: flex; align-items:center; justify-content: center;">
        <a href="#" id="create_account" onclick="toggleMenu()">Create Account</a>
    </div>
</form>
</div>
`;

let container;
let cover;
let menuToggle = false;

window.onload = () => {
    container = document.getElementById("container");

    if (container) {
        container.innerHTML = left;
        cover = document.getElementById("cover");
        cover.style.left = "50%";
    } else {
        console.error("Container element not found.");
    }
};

function toggleMenu() {
    container.innerHTML = menuToggle ? left : right;

    cover = document.getElementById("cover");

    if (cover) {
        cover.style.left = menuToggle ? "50%" : "-50%";
        
    }

    menuToggle = !menuToggle;
}
