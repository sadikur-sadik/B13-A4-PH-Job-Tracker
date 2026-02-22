
function generateHTML (){
    let htmls = '' ;
   

    for(const item of items){
 
  
  htmls = htmls +`
   <div id="card-${item.id}" class="p-6 space-y-5 bg-white rounded">
                <div id="card-${item.id}-title" class="flex justify-between items-center">
                    <div>
                        <h3 class="title text-[18px] font-semibold">${item.title}</h3>
                        <p class="title-description text-[#64748b] ">${item.description}</p>
                    </div>
                    <button id="card-${item.id}-trash" data-trash="${item.id}" class="btn-remove btn bg-white border border-gray-200 rounded-full p-2"><img src="./assets/trash.png" alt="" ></button>
                </div>

                <div id="card-${item.id}-details">
                    <p class="job-info text-[14px] text-[#64748b] ">${item.info}</p>
                </div>

                <div id="card-${item.id}-status">
                    <button id="${item.id}" class="status-update bg-[#eef4ffFF] py-2 px-3 rounded mb-2">${item.currentStatus}</button>
                    <p class="bio text-[#64748b] text-[14px]">
                        ${item.bio}
                    </p>
                </div>
                <div id="card-${item.id}-btn">
                    <button id="card-${item.id}-int" data-interview="${item.id}" class="btn-int btn btn-outline btn-success">Interview</button>
                    <button id="card-${item.id}-rej" data-rejected="${item.id}" class="btn-rej btn btn-outline btn-error ">Rejected</button>
                </div>
            </div>
   `; 

   
};
document.getElementById('rest-card').innerHTML = htmls;
// console.log(htmls)
};

generateHTML();


// Total counts 
function totalCounts(){

        const totalNumber = document.getElementById('total-number');
        const jobCount = document.getElementById('job-count');
        const interviewCount = document.getElementById('interview-number')
        const rejectionCount = document.getElementById('rejection-number')

        totalNumber.innerText = items.length;
        jobCount.innerText = items.length;
        interviewCount.innerText = interview.length;
        rejectionCount.innerText = rejection.length;

};

totalCounts();


// toggle button Functions
    const allBtn = document.getElementById('rest-btn-all');
    const interviewBtn = document.getElementById('rest-btn-interview');
    const rejectedBtn = document.getElementById('rest-btn-rejected');

function buttonToggling(id){
    allBtn.classList.remove('bg-blue-400' , 'text-white');
    interviewBtn.classList.remove('bg-blue-400' , 'text-white');
    rejectedBtn.classList.remove('bg-blue-400' , 'text-white');

    selectedBtn = document.getElementById(id);

    selectedBtn.classList.add('bg-blue-400','text-white')
};

// interview and rejection button 

const cardInterview = document.querySelectorAll('.btn-int');
const cardRejected = document.querySelectorAll('.btn-rej');


// interview 

function interviewBtnArray(){
    for(const btn of cardInterview){

    btn.addEventListener('click', function(){

        
        let matchedItems;
        for(const item of items){

            if(btn.dataset.interview === item.id){
                
             matchedItems = item;
             
            }
            
        };

        let exist = interview.find(item => item.id === matchedItems.id);

        if(!exist){
            interview.push(matchedItems);
        };
       
        let newRejection = rejection.filter(item => item.id !== matchedItems.id);
        rejection =newRejection;

        console.log(rejection , interview);
        totalCounts();
    });

    
};
};

// rejection
function rejectedBtnArray(){
    for(const btn of cardRejected){

    btn.addEventListener('click', function(){

        let matchedItems;
        
        for(const item of items){

            if(btn.dataset.rejected=== item.id){
                
             matchedItems = item;
             
            }
            
        };

        let exist = rejection.find(item => item.id === matchedItems.id);

        if(!exist){
            rejection.push(matchedItems);
        }
        let newInterview = interview.filter(item => item.id !== matchedItems.id);
        interview =newInterview;

        console.log(rejection , interview);
        totalCounts();
        
    });
};
};

interviewBtnArray();
rejectedBtnArray();