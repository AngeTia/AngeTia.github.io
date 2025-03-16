---
layout: post
title: Commandes Linux
date: 07-11-2024
categories: [System]
tag: [linux,CyberSec]
---

# 🚀 Automatiser l'exécution des outils de cybersécurité avec un script global

Dans le domaine de la cybersécurité, l'efficacité et l'automatisation sont essentielles. Lorsqu'on utilise régulièrement des outils nécessitant un environnement virtuel ou un chemin spécifique, il est utile de les rendre accessibles via une commande globale.

Voici une méthode simple pour transformer n'importe quel outil en une commande exécutable depuis n'importe où dans votre terminal.

## 🎯 Créer un script global pour un outil de cybersécurité

### 1️⃣ Installer et configurer l’outil

Si l’outil nécessite un environnement virtuel, commencez par le configurer :

```bash
git clone https://lnkd.in/ecjxbRfP
cd OutilCyber
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

### 2️⃣ Créer un script global dans `/usr/local/bin/`

```bash
sudo nano /usr/local/bin/nom_du_tool
```

### 3️⃣ Ajouter ces lignes dans le fichier

```bash
#!/bin/bash
source /chemin/vers/OutilCyber/env/bin/activate
python3 /chemin/vers/OutilCyber/outil.py "$@"
```

### 4️⃣ Rendre le script exécutable

```bash
sudo chmod +x /usr/local/bin/nom_du_tool
```

### 5️⃣ Tester la commande globale

```bash
nom_du_tool --help
```

## ✅ Pourquoi c'est utile ?

🔥 **Gain de temps** : Exécuter vos outils sans activation manuelle de l’environnement.  
🔥 **Facilité d’accès** : Utiliser l’outil comme une commande Linux native.  
🔥 **Automatisation** : Intégrer ces commandes dans des scripts d’audit et de pentest.

🔐 **Automatisez vos outils pour optimiser votre workflow en cybersécurité !** 🚀