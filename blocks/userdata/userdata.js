
import { fetchUserData } from '../../scripts/aem.js';


  // Pagination variables
  const itemsPerPage = 20;
  let currentPage = 1;

  // Function to display the current page of data
   function displayData(data) {
    
    // Calculate the range of items to show
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    // Get the displaying container.
    const container = document.getElementById('userData-list');

    // Get the items for the current page
    const slicedList = Object.fromEntries(
        Object.entries(data).slice(startIndex, endIndex)
      );

     container.innerHTML = ""; 

      for (const key in slicedList) {
        if (Object.prototype.hasOwnProperty.call(slicedList, key)) {
            const element = slicedList[key];
            const liItem = document.createElement('li');
            liItem.textContent = `${key} : ${element}`;
            container.append(liItem);
        }
    }
  
    // Update the page number display
    document.getElementById("page-number").textContent = `Page ${currentPage}`;
  }
  
  // Function to handle the "Next" button click
  function nextPage(data) {
    const totalPages = Math.ceil(Object.keys(data).length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayData(data);
    }
  }
  
  // Function to handle the "Previous" button click
  function prevPage(data) {
    if (currentPage > 1) {
      currentPage--;
      displayData(data);
    }
  }
  

export default async function decorate(block) {
    const userDataBlock = block.querySelector(`:scope > div > div`);
    console.log(userDataBlock);

    const userData = await fetchUserData();
    console.log(userData);

    userDataBlock.classList.add(`userdata-list`);

    // <!-- Pagination Controls -->

    const paginationCtrl = document.createElement('div');
    paginationCtrl.classList.add('pagination-controls');
    paginationCtrl.innerHTML = `
           <button id="prev-btn">Previous</button>
            <span id="page-number">Page 1</span>
            <button id="next-btn">Next</button>
    `

    const userList = document.createElement('ol');
    userList.setAttribute('id','userData-list');

    userDataBlock.append(userList);

    userDataBlock.parentNode.insertBefore(paginationCtrl,userDataBlock.nextSibling);

    // Set up event listeners for the pagination buttons
    document.getElementById("next-btn").addEventListener("click", ()=>{nextPage(userData)});
    document.getElementById("prev-btn").addEventListener("click", ()=>{prevPage(userData)} );
    
    // Display the first page initially
    displayData(userData);

}
