
let btn_i = document.querySelector("#btn_i");// submit button
let time_data = document.querySelector("#i_t");// time value for input box
let time_html = document.querySelector("#time");// time box html
let quiz_box = document.querySelector("#quiz_box");// quize box
let contaner_input = document.querySelector("#contaner_input");// input page
//quiz input
let btn_option_inc = document.querySelector("#btn_option_inc")// button for inc the li in each q
let option_list = document.querySelector("#option_list")// button for inc the li in each q
let btn_question_inc = document.querySelector("#btn_question_inc")
let main_ol = document.querySelector("#main_ol");


function add_li(){
  let li = document.createElement("li");
  let input  = document.createElement("input");
  let icon = document.createElement("i");

  let next_no = option_list.children.length + 1;
  input.type = "text";
  input.id = `option${next_no}`
  input.placeholder = `option `;
  input.classList = `same_o`
  li.className = `li_remove${next_no}`

  icon.classList = `fa-solid fa-trash-can s_btn`;
  icon.id = `s${next_no}`
  
  li.appendChild(input);
  li.appendChild(icon)
  option_list.appendChild(li);

  option_list.addEventListener("click", (e) => {
  if (e.target.classList.contains("s_btn")) {
    let li = e.target.closest("li");
    if (li) li.remove();
  }
});
}


function add_q(){
  let li = document.createElement("li");
  let sub_li = document.createElement("li");
 
  let input  = document.createElement("input");
  let sub_input = document.createElement("input");
  
  let ol = document.createElement("ol");

  let inc_btn_subli = document.createElement("button");
  let btn_delete = document.createElement("i");
  let q_delete = document.createElement("i");
  input.type = "text";
  input.placeholder = "quetion";
  ol.type = "A";
  input.classList = "second_q"
  sub_input.classList = "same_o"
  sub_li.classList = "same_sub_option";
  btn_delete.innerHTML = '<i class="fa-solid fa-trash-can s_btn "></i>';
  q_delete.innerHTML = '<i class="fa-solid fa-xmark q_delete"></i>'

  li.appendChild(input)
  main_ol.appendChild(li)
  li.appendChild(q_delete)
  
  
  sub_input.type = "text";
  sub_input.placeholder = "option";

  li.appendChild(ol);
  ol.appendChild(sub_li);
  sub_li.appendChild(sub_input);

  sub_li.appendChild(btn_delete)

// button  
    ol.addEventListener('click', (e) => {
    if (e.target.classList.contains('s_btn') || 
        e.target.parentElement.classList.contains('s_btn')) {
      let li = e.target.closest('li');
      if (li) li.remove();
    }
  });
  inc_btn_subli.innerHTML = "<i class='fa-solid fa-plus btn_style'></i>";
  li.appendChild(inc_btn_subli);

  inc_btn_subli.addEventListener('click' , ()=>{
    let li_option = document.createElement("li");
    let input_option = document.createElement("input");
    let btn_delete_option = document.createElement("i");
    input_option.type = "text";
    input_option.placeholder = "option";
    input_option.classList = "same_o"
    li_option.classList = "same_sub_option"
    btn_delete_option.classList = "remove_option"
    btn_delete_option.innerHTML = '<i class="fa-solid fa-trash-can s_btn "></i>';
    li_option.appendChild(input_option);
    ol.appendChild(li_option);
    li_option.appendChild(btn_delete_option)
  })


  q_delete.addEventListener('click', (e) => {
    li.remove();
  })

}

btn_option_inc.addEventListener('click' , ()=>{
  add_li();
})

btn_question_inc.addEventListener('click', ()=>{
  add_q();
})


//quize box
btn_i.addEventListener('click' , (e) =>{
    e.preventDefault();
    quiz_box.style.display = "block";
    contaner_input.style.display = "none";
    let save_time =  time_data.value;
    console.log(save_time);
    for (let i = 1; i <= save_time; i++) {
    setTimeout(() => {
        console.log(i);
        time_html.innerHTML = `${i}`
    }, i*1000);
    }
});

