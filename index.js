const num = document.getElementById("num");
const up = document.getElementById("up");
const low = document.getElementById("low");
const numb = document.getElementById("numb");
const spec = document.getElementById("spec");
const pass = document.getElementById("pass");

function generate() {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const characters = '!@#$%^&*()_+-={}:<>?';
    const length = Number(num.value);
    let chars = "";
    let password = "";

    chars += low.checked ? lower : "";
    chars += up.checked ? upper : "";
    chars += numb.checked ? numbers : "";
    chars += spec.checked ? characters : "";

    if (length <= 0) {
        pass.textContent = `Password must be at least 1 character long!`;
        return;
    }

    if (chars.length === 0) {
        pass.textContent = `At least 1 set of characters should be selected!`;
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    pass.textContent = `Suggested password: ${password}`;
}
