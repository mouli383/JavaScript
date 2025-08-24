const search=document.getElementById('search');

const matchList=document.getElementById('match-list');

//search states.json and filter it

const searchStates=async searchText =>{
    const res=await fetch('states.json');
    const states=await res.json();

    console.log(states);

    //get matches to current text
    const matches=states.filter(state=>{
        const regex=new RegExp(`^${searchText}`,'gi');
        return state.name.match(regex) || state.abbreviation.match(regex);
    });

    console.log(matches);

    outputHtml(matches);

    //show results in the match list
    
}

const outputHtml =matches =>{
    if(matches.length>0){
        const html=matches.map(match=>`
            <div class="card">
                <h4>${match.name} (${match.abbreviation})</h4>
            </div>
        `).join('');
        matchList.innerHTML=html;
    }else{
        matchList.innerHTML='<div class="card">No matches found</div>';
    }
}

search.addEventListener('input',()=>searchStates(search.value));