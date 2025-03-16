---
layout: post
title: Système de Fichiers Standard (FHS - Filesystem Hierarchy Standard)
date: 07-11-2024
categories: [System]
tag: [Linux,System]
---

#### 1️⃣ **Système de Fichiers Standard (FHS - Filesystem Hierarchy Standard)**

📁 **`/`** (Root) → Racine du système, contient tous les fichiers et dossiers.  
📁 **`/bin`** → Binaries essentiels accessibles à tous (`ls`, `cat`, `cp`, etc.).  
📁 **`/sbin`** → Binaries systèmes pour l'admin (`ifconfig`, `fdisk`, `iptables`).  
📁 **`/etc`** → Fichiers de configuration (`passwd`, `shadow`, `hosts`, `resolv.conf`).  
📁 **`/home`** → Dossiers personnels des utilisateurs (`/home/user`).  
📁 **`/root`** → Dossier personnel du super-utilisateur `root`.  
📁 **`/var`** → Données variables (`/var/log` logs, `/var/tmp` fichiers temporaires).  
📁 **`/tmp`** → Fichiers temporaires, souvent effacés au redémarrage.  
📁 **`/usr`** → Programmes et libs utilisateurs (`/usr/bin`, `/usr/local/bin`).  
📁 **`/lib` & `/lib64`** → Bibliothèques partagées pour les exécutables.  
📁 **`/dev`** → Périphériques (`/dev/sda`, `/dev/null`, `/dev/random`).  
📁 **`/mnt` & `/media`** → Points de montage pour partitions externes.  
📁 **`/opt`** → Logiciels tiers installés manuellement.  
📁 **`/proc`** → Infos système en temps réel (`/proc/cpuinfo`, `/proc/meminfo`).  
📁 **`/sys`** → Infos matérielles et interfaces pour le kernel.

#### 2️⃣ **Utilisateurs et Permissions**

👤 **`/etc/passwd`** → Liste des utilisateurs du système.  
🔒 **`/etc/shadow`** → Hash des mots de passe (accès root uniquement).  
👥 **`/etc/group`** → Groupes d’utilisateurs.  
🔑 **Permissions** : `r` (lecture), `w` (écriture), `x` (exécution).  
🛠 **Commandes clés** :

- `ls -l` → Voir permissions des fichiers.
- `chmod 777 fichier` → Modifier les permissions (lecture, écriture, exécution).
- `chown user:group fichier` → Changer le propriétaire d’un fichier.

#### 3️⃣ **Gestion des Processus et Services**

📊 **`ps aux`** → Liste des processus en cours.  
📊 **`top` / `htop`** → Surveillance des processus en temps réel.  
📊 **`kill -9 PID`** → Forcer l’arrêt d’un processus.  
⚙ **`systemctl`** / `service` → Gestion des services (`systemctl restart apache2`).

#### 4️⃣ **Réseau et Sécurité**

🌐 **Commandes utiles** :

- `ifconfig` / `ip a` → Voir les interfaces réseau.
- `netstat -tulnp` / `ss -tulnp` → Voir les ports ouverts.
- `iptables -L -n -v` → Voir les règles du pare-feu.
- `tcpdump -i eth0 port 80` → Sniffer le trafic sur une interface.

#### 5️⃣ **Logs et Analyse Forensic**

📜 **`/var/log/auth.log`** → Connexions et authentifications.  
📜 **`/var/log/syslog`** → Logs système généraux.  
📜 **`/var/log/dmesg`** → Logs du démarrage du kernel.  
📜 **`journalctl -xe`** → Logs détaillés du système.

#### 6️⃣ **Escalade de Privilèges & Post-Exploitation**

🔍 **Fichiers SUID/SGID** : `find / -perm -4000 -type f 2>/dev/null`  
🔍 **Cron Jobs** : `cat /etc/crontab`  
🔍 **Mot de passe en clair** : `grep -r "password" /etc/ 2>/dev/null`

💡 **Pro-Tips** :  
✅ Toujours vérifier `/tmp` et `/dev/shm` pour des fichiers temporaires exploitables.  
✅ Surveiller les permissions laxistes (`chmod 777` mal configuré).  
✅ Les logs révèlent souvent des failles exploitables.

Un bon hacker/admin réseau doit maîtriser ces bases pour sécuriser ou tester un système Linux efficacement ! 🚀

# Author: By Think3r3r

