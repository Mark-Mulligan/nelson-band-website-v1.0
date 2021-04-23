const lessonTeacherData = [
  {name: "Mark Mulligan", instrument: "Percussion", email: "mulliganm@friscoisd.org"}
]



const lessonCard = document.createElement("div");
const lessonCardBackground = document.createElement("img");
const lessonCardTableWrapper = document.createElement("div");
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

lessonCard.classList.add("card", "lesson-card");


/* <div class="card lesson-card">
        <img src="./public/images/greenNighthawkLogo.png" />
        <div class="card-body">
          <div class="lesson-card-table-wrapper">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Mark Mulligan</td>
                </tr>
                <tr>
                  <th>Instrument</th>
                  <td>Percussion</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>johncarter@mail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */