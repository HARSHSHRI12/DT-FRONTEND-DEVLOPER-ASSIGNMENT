// script.js

const jsonData = {
    "projects": [
        {
            "name": "Technical Project Management",
            "tasks": [
                {
                    "name": "Task 1",
                    "assets": [
                        {
                            "type": "video",
                            "title": "Technical Project Management",
                            "description": "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
                            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
                        },
                        {
                            "type": "video",
                            "title": "Threadbuild",
                            "description": "Watch the video and thread build.",
                            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
                        },
                        {
                            "type": "article",
                            "title": "Structure Your Pointers",
                            "description": "Write a 400-500 word article from your thread.",
                            "content": "Some article content here."
                        },
                        {
                            "type": "method",
                            "title": "4SA Method",
                            "description": "To explore more read more.",
                            "content": "Some method content here."
                        }
                    ]
                }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.querySelector('.expand-board');
    const collapseButton = document.querySelector('.collapse-board');
    const state1 = document.querySelector('.state-1');
    const state2 = document.querySelector('.state-2');
    const taskContainer = document.getElementById('task-container');
    const taskContainerExpanded = document.getElementById('task-container-expanded');
    const taskList = document.getElementById('task-list');

    function renderAssets(assets, container) {
        container.innerHTML = '';
        assets.forEach(asset => {
            const assetBlock = document.createElement('div');
            assetBlock.className = 'content-block';
            assetBlock.innerHTML = `
                <h2>${asset.title}</h2>
                <p>${asset.description}</p>
                <span class="arrow">&#x25BC;</span>
                <div class="description">
                    ${asset.type === 'video' ? `<iframe src="${asset.url}" frameborder="0" allowfullscreen></iframe>` : `<p>${asset.content}</p>`}
                </div>
            `;
            assetBlock.querySelector('.arrow').addEventListener('click', () => {
                const description = assetBlock.querySelector('.description');
                description.style.display = description.style.display === 'none' || !description.style.display ? 'block' : 'none';
                assetBlock.querySelector('.arrow').textContent = description.style.display === 'none' ? '▼' : '▲';
            });
            container.appendChild(assetBlock);
        });
    }

    expandButton.addEventListener('click', () => {
        state1.classList.remove('active');
        state2.classList.add('active');
        renderAssets(jsonData.projects[0].tasks[0].assets, taskContainerExpanded);
    });

    collapseButton.addEventListener('click', () => {
        state2.classList.remove('active');
        state1.classList.add('active');
        renderAssets(jsonData.projects[0].tasks[0].assets, taskContainer);
    });

    renderAssets(jsonData.projects[0].tasks[0].assets, taskContainer);

    jsonData.projects[0].tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.name;
        taskList.appendChild(taskItem);
    });
});
