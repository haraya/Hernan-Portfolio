
  const buttons = document.querySelectorAll('.rail-btn[data-target]');
  const panels = document.querySelectorAll('.panel');
  const tabText = document.getElementById('tabText');
  const statusText = document.getElementById('statusText');

  const fileNames = {
    about: 'about.md',
    experience: 'experience.js',
    work: 'work.py',
    contact: 'contact.sh'
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(p => p.classList.remove('show'));
      document.getElementById('panel-' + target).classList.add('show');

      const name = fileNames[target];
      tabText.textContent = name;
      statusText.textContent = name + ' — Ln 1, Col 1';
    });
  });
