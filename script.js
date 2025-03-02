
        const roles = [
            "Web Developer",
            "Machine Learning Enthusiast", 
            "Generative AI Explorer",
            "Problem Solver",
            "Thought Weaver"
        ];
        
        let currentIndex = 0;
        let currentText = "";
        let letterIndex = 0;
        
        function typeText() {
            const roleElement = document.getElementById('role');
            const targetText = roles[currentIndex];
            
            if (letterIndex < targetText.length) {
                currentText += targetText.charAt(letterIndex);
                roleElement.textContent = currentText;
                letterIndex++;
                setTimeout(typeText, 100);
            } else {
                setTimeout(eraseText, 2000);
            }
        }
        
        function eraseText() {
            const roleElement = document.getElementById('role');
            
            if (currentText.length > 0) {
                currentText = currentText.slice(0, -1);
                roleElement.textContent = currentText;
                setTimeout(eraseText, 50);
            } else {
                letterIndex = 0;
                currentIndex = (currentIndex + 1) % roles.length;
                setTimeout(typeText, 500);
            }
        }

        typeText();

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        function showTab(tabName) {
            
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
           
            document.getElementById(tabName).classList.add('active');
            
           
            event.target.classList.add('active');
        }
        
        
        const projectDetails = {
            hexagon: {
                title: "Hexagon Project Intern",
                description: "Overview: An AI-powered tool that assists in writing emails, essays, letters, and other text-based content with deep learning and Gemini API integration.\nDescription:\n• Built using Flask and integrated with the Gemini API to generate high-quality text content based on user prompts\n• Capable of producing structured and contextually relevant outputs for different writing needs, including professional emails, academic essays, and formal letters\n• Designed to enhance productivity by reducing writing time and improving content coherence\n• Implemented a user-friendly interface that allows easy input of requirements and dynamic content generation",
                link: "https://www.linkedin.com/posts/reshmi-bodepudi_%F0%9D%90%92%F0%9D%90%A8%F0%9D%90%A6%F0%9D%90%9E-%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0%F0%9D%90%AC-%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%9E-%F0%9D%90%AD%F0%9D%90%A2%F0%9D%90%A6%F0%9D%90%9E%F0%9D%90%A5%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%AC-activity-7271040426227183616-GbaJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVrSHkBe3Wz9J2ZY4hicrpqbGRpT1tBljQ"
            },
            soulease: {
                title: "SoulEase",
                description: "Overview: A mental well-being platform that detects emotions from user journal entries and provides positive affirmations and mood-enhancing exercises.\n\n" +
                "Description:\n" +
                "• Implemented machine learning algorithms to analyze text inputs and classify user emotions\n" +
                "• Provided AI-generated positive affirmations to uplift users based on detected emotions\n" +
                "• Developed a recommendation system that suggests mood-enhancing exercises based on user responses to a structured questionnaire\n" +
                "• Focused on mental well-being by integrating psychology-based techniques to improve user mood and emotional state\n"
                ,
                link: "https://github.com/reshmibodepudi/SoulEase"
            },
            kisansathi: {
                title: "KisanSathi",
                description: "Overview: A one-stop AI-powered solution for farmers that predicts the best crops to grow based on soil analysis and provides multilingual agricultural assistance.\n\n" +
                "Description:\n" +
                "• Implemented a machine learning model that analyzes soil content and suggests the best crops to cultivate\n" +
                "• Integrated an LLM-based system to generate detailed crop reports, offering farmers in-depth insights\n" +
                "• Provided multilingual support to ensure accessibility for farmers across different regions\n" +
                "• Included a YouTube resource hub with curated agricultural content to educate and guide farmers\n" +
                "• Developed a FAQ system to answer common farming-related queries dynamically\n" ,
                link: "https://reshmibodepudi.github.io/Kisan-Sathi/kisansathi/index.html"
            },
            aiwriter: {
                title: "AI-Writer",
                description: "Overview: An AI-powered tool that assists in writing emails, essays, letters, and other text-based content with deep learning and Gemini API integration.\n\n" +
                "Description:\n" +
                "• Built using Flask and integrated with the Gemini API to generate high-quality text content based on user prompts\n" +
                "• Capable of producing structured and contextually relevant outputs for different writing needs, including professional emails, academic essays, and formal letters\n" +
                "• Designed to enhance productivity by reducing writing time and improving content coherence\n" +
                "• Implemented a user-friendly interface that allows easy input of requirements and dynamic content generation\n" +
                "• Supports various use cases, including academic writing, business communication, and creative content generation",
                link: "https://github.com/reshmibodepudi/AI-Writer"
            }
        };

        
        const modal = document.getElementById("projectModal");
        const closeBtn = document.getElementsByClassName("close-modal")[0];

        function showProjectDetails(projectId) {
            const project = projectDetails[projectId];
            document.getElementById("modalTitle").textContent = project.title;
            document.getElementById("modalDescription").textContent = project.description;
            document.getElementById("modalLink").href = project.link;
            modal.style.display = "flex";
        }

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        function sendEmail(event) {
            event.preventDefault();
            let formData = new FormData(document.getElementById("contactForm"));

            fetch("https://script.google.com/macros/s/AKfycbw4mr6Ji1S3ZLxRiBlqUefh58NzoywbHGCOQE6wujFee9Dk3aH09B6rmsq5MdnPBqMo4g/exec", {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                alert("Message sent successfully!");
            })
            .catch(error => {
                alert("Error sending email: " + error);
            });
        }
    