const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Instrument",
    accessor: "instrument",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];

const lessonTeacherData = [
  {
    name: "Huong Le",
    instrument: "Flute",
    email: "huongflute@gmail.com",
  },
  {
    name: "Katie Haun",
    instrument: "Oboe",
    email: "katiehaun22@gmail.com"
  },
  {
    name: "Michael Jones",
    instrument: "Basson",
    email: "micheljjonesbasson@gmail.com"
  },
  {
    name: "Philip Roth",
    instrument: "Clarinet",
    email: "philip.roth97@gmail.com"
  },
  {
    name: "Jake Hale",
    instrument: "Clarinet",
    email: "jake.hale0@gmail.com"
  },
  {
    name: "William Chien",
    instrument: "Saxophone",
    email: "williamchien.saxophone@gmail.com"
  },
  {
    name: "Steve Stark",
    instrument: "Trumpet",
    email: "stephen.stark7@gmail.com"
  },
  {
    name: "Lisa Hummel",
    instrument: "French Horn",
    email: "hummelstudio@gmail.com"
  },
  {
    name: "Tony Bianchetta",
    instrument: "Trombone",
    email: "mrb4band@gmail.com"
  },
  {
    name: "Ada Brooks",
    instrument: "Euphonium/Tuba",
    email: "ada0brooks@gmail.com"
  },
  {
    name: "Jordan Drake",
    instrument: "Euphonium/Tuba",
    email: "Jordandrake0316@gmail.com"
  },
  {
    name: "William Champion",
    instrument: "Percussion",
    email: "will.champion93@gmail.com"
  },
  {
    name: "Waichi Champion",
    instrument: "Percussion",
    email: "tangwchi@gmail.com"
  }
];

const lessonTeacherList = document.querySelector(".lesson-teacher-list");

lessonTeacherData.forEach((teacher) => {
  const column = document.createElement("div");
  const lessonCard = document.createElement("div");
  const lessonCardBackgroundImg = document.createElement("img");
  const lessonCardBackgroundColor = document.createElement("div");
  const cardBody = document.createElement("div");
  const lessonCardTableWrapper = document.createElement("div");
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  columns.forEach((col) => {
    const tableRow = document.createElement("tr");
    const tableHeader = document.createElement("th");
    const tableCell = document.createElement("td");

    tableHeader.innerText = col.Header;
    tableCell.innerText = teacher[col.accessor];

    tableRow.appendChild(tableHeader);
    tableRow.appendChild(tableCell);
    tableBody.appendChild(tableRow);
  });

  table.appendChild(tableBody);
  table.classList.add("table", "table-bordered");

  lessonCardTableWrapper.appendChild(table);
  lessonCardTableWrapper.classList.add("lesson-card-table-wrapper");

  cardBody.appendChild(lessonCardTableWrapper);
  cardBody.classList.add("card-body");

  lessonCardBackgroundImg.setAttribute(
    "src",
    "./public/images/greenNighthawkLogo.png"
  );

  lessonCard.appendChild(lessonCardBackgroundImg);
  lessonCard.appendChild(cardBody);
  lessonCard.classList.add("card", "lesson-card");

  lessonCardBackgroundColor.classList.add("lesson-card-background")
  lessonCard.appendChild(lessonCardBackgroundColor);

  column.appendChild(lessonCard);
  column.classList.add("col-xl-4", "col-md-6", "col-12", "d-flex", "justify-content-center", "mb-4");

  lessonTeacherList.appendChild(column);

});

/* <div class="card lesson-card">
        <img src="./public/images/greenNighthawkLogo.png" />
        <div class="lesson-card-background"></div>
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
