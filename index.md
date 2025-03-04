---
layout: default
title: Home
---

<img src="{{ site.logo }}" alt="Profile Picture" class="logo">
# {{ site.title }}
_{{ site.description }}_

<button id="theme-toggle">Toggle Dark Mode</button>

## Technical Skills
Python, SQL, AWS, Snowflake, MATLAB

## Education
- **Ph.D., Physics** | The University of Texas at Dallas (_May 2022_)
- **M.S., Physics** | The University of Texas at Dallas (_December 2019_)
- **B.S., Physics** | The University of Texas at Dallas (_May 2017_)

## Work Experience
### Data Scientist @ Toyota Financial Services (_June 2022 - Present_)
- Uncovered and corrected missing step in production data pipeline which impacted over 70% of active accounts
- Redeveloped loan originations model which resulted in 50% improvement in model performance and saving 1 million dollars in potential losses

### Data Science Consultant @ Shawhin Talebi Ventures LLC (_December 2020 - Present_)
- Conducted data collection, processing, and analysis for novel study evaluating the impact of over 300 biometrics variables on human performance in hyper-realistic, live-fire training scenarios
- Applied unsupervised deep learning approaches to longitudinal ICU data to discover novel sepsis sub-phenotypes

## Projects
### Data-Driven EEG Band Discovery with Decision Trees
[Publication](https://www.mdpi.com/1424-8220/22/8/3048)

Developed objective strategy for discovering optimal EEG bands based on signal power spectra using **Python**. This data-driven approach led to better characterization of the underlying power spectrum by identifying bands that outperformed the more commonly used band boundaries by a factor of two.

![EEG Band Discovery](/assets/img/eeg_band_discovery.jpeg)

### Decoding Physical and Cognitive Impacts of Particulate Matter Concentrations at Ultra-Fine Scales
[Publication](https://www.mdpi.com/1424-8220/22/11/4240)

Used **Matlab** to train over 100 machine learning models which estimated particulate matter concentrations based on a suite of over 300 biometric variables. Inferring environmental conditions solely from biometric measurements allows us to disentangle key interactions between the environment and the body.

![Bike Study](/assets/img/bike_study.jpeg)

## Talks & Lectures
- Causality: The new science of an old question - GSP Seminar, Fall 2021
- Guest Lecture: Dimensionality Reduction - Big Data and Machine Learning for Scientific Discovery (PHYS 5336), Spring 2021
- Guest Lecture: Fourier and Wavelet Transforms - Scientific Computing (PHYS 5315), Fall 2020

- [Data Science YouTube](https://www.youtube.com/channel/UCa9gErQ9AE5jT2DZLjXBIdA)
- [Data Science Blog](https://medium.com/@shawhin)

<script>
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
</script>