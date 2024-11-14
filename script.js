// 1. Displaying an alert for the "Check Current Offers" button
document.getElementById('offerButton').addEventListener('click', function() {
    alert('Offers are not available at the moment. Please check back later.');
  });
  
  // 2. Toggle additional variants in the Variants Table
  document.getElementById('toggleVariantsButton').addEventListener('click', function() {
    const table = document.getElementById('variantsTable');
    if (table.innerHTML.includes('AX7')) {
      // Hide additional rows if they exist
      table.innerHTML = `
        <tr>
          <td>XUV700 MX</td>
          <td>Petrol</td>
          <td>₹13.18 Lakh</td>
        </tr>
        <tr>
          <td>XUV700 AX5</td>
          <td>Diesel</td>
          <td>₹14.38 Lakh</td>
        </tr>
      `;
      this.textContent = 'Show More Variants';
    } else {
      // Show additional rows
      table.innerHTML += `
        <tr>
          <td>XUV700 AX7</td>
          <td>Petrol</td>
          <td>₹16.58 Lakh</td>
        </tr>
        <tr>
          <td>XUV700 AX7L</td>
          <td>Diesel</td>
          <td>₹18.00 Lakh</td>
        </tr>
      `;
      this.textContent = 'Show Less Variants';
    }
  });
  
  // 3. Show and hide the review form when clicking "Write your Review"
  document.getElementById('reviewButton').addEventListener('click', function() {
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none';
  });
  
  // 4. Submitting a review and showing a confirmation message
  document.getElementById('submitReview').addEventListener('click', function() {
    const reviewText = document.getElementById('userReview').value;
    if (reviewText.trim() === '') {
      alert('Please write something before submitting!');
    } else {
      alert('Thank you for your review!');
      document.getElementById('userReview').value = '';
      document.getElementById('reviewForm').style.display = 'none';
    }
  });
  