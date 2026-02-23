// function importantHTML(item){
//     htmls = 

//    return htmls;
// }


function generateHTML (){
    let htmlGeneration = '' ;
   

    for(const item of items){
 
  
  htmlGeneration = htmlGeneration +  `<div id="card-${item.id}" class="p-6 space-y-5 bg-white rounded">
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
document.getElementById('rest-card').innerHTML = htmlGeneration;
// console.log(htmls)


};

generateHTML();

const mainContainer = document.getElementById('rest-card');
const filteredInterview = document.getElementById('filtered-interview');
const filteredRejected = document.getElementById('filtered-rejected');
const interviewEmptyContainer = document.getElementById('interviewBtnid');
const rejectionEmptyContainer = document.getElementById('rejectionBtnid');

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
    
    interviewBtn.classList.remove('bg-blue-400' , 'text-white');
    rejectedBtn.classList.remove('bg-blue-400' , 'text-white');

    let selectedBtn = document.getElementById(id);

    selectedBtn.classList.add('bg-blue-400','text-white');

    if(id === 'rest-btn-interview'){
            mainContainer.classList.add('hidden');
            filteredRejected.classList.add('hidden');
            rejectionEmptyContainer.classList.add('hidden');
            
            if(interview.length>0){
                interviewEmptyContainer.classList.add('hidden');
                filteredInterview.classList.remove('hidden');
            }
            else{
                filteredInterview.classList.add('hidden');
                interviewEmptyContainer.classList.remove('hidden');
                
            }
    }
    else if(id === 'rest-btn-rejected'){
            mainContainer.classList.add('hidden');
            filteredInterview.classList.add('hidden');
            interviewEmptyContainer.classList.add('hidden');

            if(rejection.length>0){
                rejectionEmptyContainer.classList.add('hidden');
                filteredRejected.classList.remove('hidden');
            }
            else{
                filteredRejected.classList.add('hidden');
                rejectionEmptyContainer.classList.remove('hidden');
                
            }

    }
    else if(id === 'rest-btn-all'){
            mainContainer.classList.remove('hidden');
            filteredInterview.classList.add('hidden');
            interviewEmptyContainer.classList.add('hidden');
            filteredRejected.classList.add('hidden');
            rejectionEmptyContainer.classList.add('hidden');

    }

   
};
// update 
 function dataEmpty(){

          interviewEmptyContainer.classList.add('hidden');
          rejectionEmptyContainer.classList.add('hidden');
          document.getElementById('allBtnid').classList.add('hidden');

     if(interview.length === 0){

        filteredInterview.classList.add('hidden');
        interviewEmptyContainer.classList.remove('hidden');
        rejectionEmptyContainer.classList.add('hidden');
         } 
         else {
            filteredInterview.classList.remove('hidden');
            interviewEmptyContainer.classList.add('hidden');
             } 
        if(rejection.length === 0){
            filteredRejected.classList.add('hidden');
            rejectionEmptyContainer.classList.remove('hidden');
            interviewEmptyContainer.classList.add('hidden');
             } 
        else { 
            filteredRejected.classList.remove('hidden');
            rejectionEmptyContainer.classList.add('hidden'); 
            } 
        if(items.length === 0){
            mainContainer.classList.add('hidden');
            document.getElementById('allBtnid').classList.remove('hidden');
            interviewEmptyContainer.classList.add('hidden');
            rejectionEmptyContainer.classList.add('hidden') 
        } 
        else {
             document.getElementById('allBtnid').classList.add('hidden'); 
            } 
        }
//trash button


function trashButtonAll(){
     const trashBtn = document.querySelectorAll('.btn-remove'); 
     for(const btn of trashBtn){ 
        btn.addEventListener('click',function(){
             
            let matchedItems = '';
               
              for(const item of items){ 
                
                if(btn.dataset.trash === item.id){
                    
                    matchedItems = item; };
                    
                };
                     
                let newItems = items.filter(item => item.id !== matchedItems.id); 
                     
                items = newItems; 
                     
                let matchedInterview = '';
                       
                for(const item of interview){ 
                       
                    if(btn.dataset.trash === item.id){
                             
                        matchedInterview = item;
                     }; 
                    };
                              
                    let newInterview = interview.filter(item => item.id !== matchedInterview.id);
                              
                    interview = newInterview;
                                
                    let matchedRejected = '';
                                
                    for(const item of rejection){ 
                        if(btn.dataset.trash === item.id){ 
                                        
                            matchedRejected = item; 
                        }; 
                                    
                    };
                                         
                    let newRejected= rejection.filter(item => item.id !== matchedRejected);
                                          
                    rejection = newRejected;
                                          
                                          
                                          
                    generateHTML();
                                          
                    putInterview();
                                           
                    putRejected(); 
                                            
                    totalCounts();
                    trashButtonAll()
                                        
                })
             } 
            
            
            }; 
trashButtonAll();


// interview 

function interviewBtnArray(){
    const cardInterview = document.querySelectorAll('.btn-int');
    for(const btn of cardInterview){

    btn.addEventListener('click', function(){

        
        let matchedItems;
        for(const item of items){

            if(btn.dataset.interview === item.id){
             const impChange =document.getElementById(item.id);
             impChange.innerText ='Interview';
             impChange.classList.remove('btn', 'bg-red-200', 'text-red-600');
             impChange.classList.add('btn', 'bg-green-200', 'text-green-600')
             matchedItems = item;
             
            }
            
        };

        let exist = interview.find(item => item.id === matchedItems.id);
        
        if(!exist){
            matchedItems.currentStatus = 'Interview';
            interview.push(matchedItems);
        }
        else{return};
       
        let newRejection = rejection.filter(item => item.id !== matchedItems.id);
        rejection = newRejection;

       
        
        putInterview();
        putRejected();
        totalCounts();
        trashButtonAll();
       dataEmpty();
        
    });

    
};
};

// rejection
function rejectedBtnArray(){
    const cardRejected = document.querySelectorAll('.btn-rej');
    for(const btn of cardRejected){

    btn.addEventListener('click', function(){

        let matchedItems;
        
        for(const item of items){

            if(btn.dataset.rejected=== item.id){
                const impChange =document.getElementById(item.id);
                impChange.innerText ='Rejected';
                impChange.classList.remove('btn', 'bg-green-200', 'text-green-600');
                impChange.classList.add('btn', 'bg-red-200', 'text-red-600');
                 matchedItems = item;
             
            }
            
        };

        let exist = rejection.find(item => item.id === matchedItems.id);

        if(!exist){
            matchedItems.currentStatus = 'Rejected';
            rejection.push(matchedItems);
        }
        
        let newInterview = interview.filter(item => item.id !== matchedItems.id);
        interview =newInterview;

       
        
        putInterview();
        putRejected();
        totalCounts();
        trashButtonAll();
        dataEmpty();
        
        
    });
};
};

interviewBtnArray();
rejectedBtnArray();



// 3buttonfunction

  



function putInterview(){
    filteredInterview.innerHTML = '';

    for(let item of interview){

        let div = document.createElement('div');
        div.classList.add('mb-4');

        div.innerHTML =   `<div id="card-${item.id}" class="p-6 space-y-5 bg-white rounded">
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
                    <button id="${item.id}"  class="status-update btn bg-green-200 text-green-600 py-2 px-3 rounded mb-2">${item.currentStatus}</button>
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
    filteredInterview.appendChild(div);
    }
     
    interviewBtnArray();
    rejectedBtnArray();
    trashButtonAll();
   
}
function putRejected(){
    filteredRejected.innerHTML = '';

    for(let item of rejection){

        let div = document.createElement('div');
        div.classList.add('mb-4');
        div.innerHTML =   `<div id="card-${item.id}" class="p-6 space-y-5 bg-white rounded">
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
                    <button id="${item.id}" class="status-update btn bg-red-200 text-red-600 py-2 px-3 rounded mb-2">${item.currentStatus}</button>
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
    filteredRejected.appendChild(div);
    }
     interviewBtnArray();
     rejectedBtnArray();
     trashButtonAll();
};
            putInterview();
            putRejected();


