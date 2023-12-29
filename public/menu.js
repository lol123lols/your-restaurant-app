document.addEventListener('DOMContentLoaded', async () => {
    const menuList = document.getElementById('menu-list');
    const response = await fetch('/api/menu');
    const menuData = await response.json();

    menuData.forEach(item => {
        const listItem = document.createElement('li');
        const spiceLevelIcons = getSpiceLevelIcons(item.spiceLevel);
        
        listItem.innerHTML = `<strong>${item.name}</strong> - ₹${item.price} - Spice Level: ${item.spiceLevel}
                              ${spiceLevelIcons}
                              <button onclick="showDetails('${item.id}')">More Info</button>`;
        menuList.appendChild(listItem);
    });
});

function getSpiceLevelIcons(spiceLevel) {
    const chiliIcon = '&#127798;';
    
    switch (spiceLevel.toLowerCase()) {
        case 'low':
            return ''; // No chili icon for low spice level
        case 'mild':
            return `<span class="chili">${chiliIcon}</span>`;
        case 'medium':
            return `<span class="chili">${chiliIcon.repeat(2)}</span>`;
        case 'strong':
            return `<span class="chili">${chiliIcon.repeat(3)}</span>`;
        default:
            return '';
    }
}

function showDetails(itemId) {
    // Handle more information dropdown here
    alert(`Additional details for item ${itemId}`);
}
